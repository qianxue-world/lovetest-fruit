# CI/CD Setup Guide

## Complete Automated Deployment Pipeline

This guide will help you set up the complete CI/CD pipeline for automatic version bumping, Docker image building, and Kubernetes deployment via ArgoCD.

## 🎯 What This Pipeline Does

Every time you commit to `main`, `master`, or `develop`:

1. ✅ **Auto-bumps version** (1.0.0 → 1.0.1 → 1.0.2...)
2. ✅ **Builds Docker image** (multi-arch: amd64, arm64)
3. ✅ **Pushes to Docker Hub** with version tag and latest tag
4. ✅ **Updates K8s manifests** (kustomization.yaml, deployment.yaml)
5. ✅ **Commits changes back** to repository
6. ✅ **Creates Git tag** (v1.0.1, v1.0.2...)
7. ✅ **ArgoCD auto-deploys** to Kubernetes cluster

## 📋 Prerequisites

### 1. Docker Hub Account
- Create account at https://hub.docker.com
- Create repository: `lovetest-mbti`

### 2. GitHub Repository
- Your code repository
- Admin access to configure secrets

### 3. Kubernetes Cluster
- Running cluster with kubectl access
- ArgoCD installed

## 🔧 Setup Steps

### Step 1: Configure Docker Hub

1. **Create Access Token:**
   ```
   Docker Hub → Account Settings → Security → New Access Token
   Name: github-actions
   Permissions: Read, Write, Delete
   ```

2. **Save the token** (you'll need it for GitHub secrets)

### Step 2: Configure GitHub Secrets

Go to your repository: `Settings → Secrets and variables → Actions → New repository secret`

Add these secrets:

```
DOCKERHUB_USERNAME = omaticaya
DOCKERHUB_TOKEN = dckr_pat_xxxxxxxxxxxxx (from Step 1)
```

**Note:** `GITHUB_TOKEN` is automatically provided by GitHub Actions.

### Step 3: Configure Branch Protection (Optional but Recommended)

`Settings → Branches → Add branch protection rule`

For `main` branch:
- ✅ Require pull request reviews before merging
- ✅ Require status checks to pass
- ✅ Allow force pushes (for GitHub Actions bot)
- ✅ Allow specified actors to bypass (add: `github-actions[bot]`)

### Step 4: Verify Workflow Files

Ensure these files exist in your repository:

```
.github/workflows/docker-build.yml  ✅
VERSION                              ✅
k8s/kustomization.yaml              ✅
k8s/deployment.yaml                 ✅
Dockerfile                          ✅
```

### Step 5: Initial Commit

```bash
# Ensure VERSION file exists
echo "1.0.0" > VERSION

# Commit and push
git add VERSION k8s/
git commit -m "chore: setup CI/CD pipeline"
git push origin main
```

### Step 6: Verify First Build

1. Go to **Actions** tab in GitHub
2. Watch the "Build and Push Docker Image" workflow
3. Check that it completes successfully
4. Verify new commit appears: `chore: bump version to 1.0.1 [skip ci]`

### Step 7: Verify Docker Hub

```bash
# Check Docker Hub for new image
docker pull omaticaya/lovetest-mbti:1.0.1
docker pull omaticaya/lovetest-mbti:latest
```

Or visit: https://hub.docker.com/r/omaticaya/lovetest-mbti/tags

### Step 8: Setup ArgoCD

#### Option A: Apply ArgoCD Application

```bash
kubectl apply -f k8s/argocd-application.yaml
```

#### Option B: Create via ArgoCD CLI

```bash
argocd app create mbti-personality-test \
  --repo https://github.com/YOUR_USERNAME/YOUR_REPO.git \
  --path k8s \
  --dest-server https://kubernetes.default.svc \
  --dest-namespace lovetest-mbti \
  --sync-policy automated \
  --auto-prune \
  --self-heal
```

#### Option C: Create via ArgoCD UI

1. Open ArgoCD UI
2. Click **+ NEW APP**
3. Fill in:
   - **Application Name:** mbti-personality-test
   - **Project:** default
   - **Sync Policy:** Automatic
   - **Repository URL:** https://github.com/YOUR_USERNAME/YOUR_REPO.git
   - **Path:** k8s
   - **Cluster:** https://kubernetes.default.svc
   - **Namespace:** lovetest-mbti
4. Enable:
   - ✅ Auto-Create Namespace
   - ✅ Auto-Sync
   - ✅ Self Heal
   - ✅ Prune Resources

### Step 9: Verify ArgoCD Deployment

```bash
# Check ArgoCD application
argocd app get mbti-personality-test

# Check Kubernetes pods
kubectl get pods -n lovetest-mbti

# Check deployment
kubectl get deployment -n lovetest-mbti
```

## 🚀 Usage

### Normal Development Flow

```bash
# Make changes to your code
vim src/App.tsx

# Commit and push
git add .
git commit -m "feat: add new feature"
git push origin main
```

**What happens automatically:**
1. GitHub Actions triggers
2. Version bumps: 1.0.1 → 1.0.2
3. Docker image builds: `omaticaya/lovetest-mbti:1.0.2`
4. K8s manifests update
5. Changes commit back to repo
6. ArgoCD detects and deploys

### Skip CI for Documentation

```bash
git commit -m "docs: update README [skip ci]"
git push
```

### Manual Version Bump

**Bump Minor Version (1.0.x → 1.1.0):**
```bash
echo "1.1.0" > VERSION
git add VERSION
git commit -m "chore: bump minor version to 1.1.0"
git push
```

**Bump Major Version (1.x.x → 2.0.0):**
```bash
echo "2.0.0" > VERSION
git add VERSION
git commit -m "chore: bump major version to 2.0.0"
git push
```

## 📊 Monitoring

### GitHub Actions
- **URL:** https://github.com/YOUR_USERNAME/YOUR_REPO/actions
- View workflow runs, logs, and deployment summaries

### Docker Hub
- **URL:** https://hub.docker.com/r/omaticaya/lovetest-mbti/tags
- View all image tags and versions

### ArgoCD Dashboard
```bash
# Port forward ArgoCD UI
kubectl port-forward svc/argocd-server -n argocd 8080:443

# Open browser
open https://localhost:8080
```

### Kubernetes
```bash
# Watch pods
kubectl get pods -n lovetest-mbti -w

# View logs
kubectl logs -f deployment/mbti-personality-test -n lovetest-mbti

# Check deployment status
kubectl rollout status deployment/mbti-personality-test -n lovetest-mbti
```

## 🔍 Troubleshooting

### Workflow Fails to Push Commits

**Problem:** Permission denied when pushing to repository

**Solution:**
1. Check branch protection rules
2. Add `github-actions[bot]` to bypass list
3. Or disable "Require pull request reviews" for bot

### Docker Build Fails

**Problem:** Build fails with authentication error

**Solution:**
1. Verify `DOCKERHUB_USERNAME` and `DOCKERHUB_TOKEN` secrets
2. Check Docker Hub token hasn't expired
3. Regenerate token if needed

### ArgoCD Not Syncing

**Problem:** ArgoCD doesn't detect changes

**Solution:**
```bash
# Manual sync
argocd app sync mbti-personality-test

# Check sync status
argocd app get mbti-personality-test

# Check ArgoCD logs
kubectl logs -n argocd deployment/argocd-application-controller
```

### Version Conflicts

**Problem:** VERSION file out of sync

**Solution:**
```bash
# Reset to correct version
echo "1.0.5" > VERSION
git add VERSION
git commit -m "fix: reset version to 1.0.5"
git push
```

### Image Pull Errors in Kubernetes

**Problem:** Pods can't pull image from Docker Hub

**Solution:**
```bash
# Check if image exists
docker pull omaticaya/lovetest-mbti:1.0.1

# Check pod events
kubectl describe pod <pod-name> -n lovetest-mbti

# Verify image pull policy
kubectl get deployment mbti-personality-test -n lovetest-mbti -o yaml | grep imagePullPolicy
```

## 🔐 Security Best Practices

1. **Rotate Docker Hub tokens** every 90 days
2. **Use branch protection** rules
3. **Review workflow logs** regularly
4. **Keep secrets secure** - never commit them
5. **Use least privilege** for tokens
6. **Enable 2FA** on Docker Hub and GitHub

## 📈 Advanced Configuration

### Custom Version Bumping Logic

Edit `.github/workflows/docker-build.yml`:

```yaml
# Bump minor version instead of patch
MINOR=$((MINOR + 1))
PATCH=0
NEW_VERSION="${MAJOR}.${MINOR}.${PATCH}"
```

### Multi-Environment Deployment

Create separate workflows for different environments:
- `docker-build-dev.yml` → dev namespace
- `docker-build-staging.yml` → staging namespace
- `docker-build-prod.yml` → prod namespace

### Slack Notifications

Add to workflow:
```yaml
- name: Notify Slack
  uses: 8398a7/action-slack@v3
  with:
    status: ${{ job.status }}
    webhook_url: ${{ secrets.SLACK_WEBHOOK }}
```

## 📚 Additional Resources

- [GitHub Actions Documentation](https://docs.github.com/en/actions)
- [Docker Hub Documentation](https://docs.docker.com/docker-hub/)
- [ArgoCD Documentation](https://argo-cd.readthedocs.io/)
- [Kustomize Documentation](https://kustomize.io/)

## ✅ Checklist

Before going to production:

- [ ] Docker Hub secrets configured
- [ ] GitHub Actions workflow tested
- [ ] VERSION file initialized
- [ ] K8s manifests updated
- [ ] ArgoCD application created
- [ ] First deployment successful
- [ ] Monitoring setup complete
- [ ] Rollback procedure tested
- [ ] Documentation updated
- [ ] Team trained on workflow

## 🎉 Success!

Your CI/CD pipeline is now fully automated! Every commit will:
- Auto-bump version
- Build and push Docker image
- Update K8s manifests
- Deploy via ArgoCD

Happy deploying! 🚀

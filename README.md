# Multicloud DevOps Pipeline

Automated infrastructure provisioning and CI/CD deployment pipeline across AWS and IBM Cloud using modern DevOps tools.

## Description

This project demonstrates a complete end-to-end DevOps pipeline using Terraform for infrastructure as code, Ansible for server configuration, and GitHub Actions for CI/CD automation. It provisions and manages resources on both AWS and IBM Cloud. The setup installs and configures  Docker on compute instances, making it ideal for deploying containerized applications in a multi-cloud environment. Designed to streamline deployment, ensure scalability, and promote best practices in cloud-agnostic DevOps.

## Getting Started

### Dependencies and installation

Ensure the following are installed on your local machine

* Terraform (v1.11.4)
* Ansible (v2.16.3)
* Ubuntu for Ansible(WSL)
* GitHub CLI (for GitHub Actions setup)
* AWS CLI (configured with IAM credentials)
* IBM Cloud CLI (`ibmcloud`) and Terraform plugin
* OpenSSH keys  (for remote Ansible provisioning)
* OS: Tested on Ubuntu for amazon ec2, centos os for ibm cloud

### Executing Program

Follow these steps to deploy the multi-cloud infrastructure and application:

1. **Unzip the Project Files**
   ```bash
   unzip multicloud-devops-pipeline.zip
   cd multicloud-devops-pipeline
   ```

2. **Initialize Terraform**
   ```bash
   terraform init
   ```

3. **Apply Terraform Configuration**
   ```bash
   terraform apply
   ```
   - Approve the plan when prompted.

4. **Get Public IPs from Terraform Output**
   - Note the outputted IP addresses of both AWS and IBM Cloud instances.

5. **Update Ansible Inventory**
   - Open `inventory.ini` and replace the placeholder IPs with the actual IPs from Terraform output.

6. **Run Ansible Playbook**
   ```bash
   ansible-playbook -i inventory.ini playbook.yml
   ```

7. **Go to the GitHub Repository**
   - Open the GitHub repo where this project is hosted.
    [ci/cd using github action](https://github.com/sangramVIV/devops_testing)


8. **Set Repository Secrets**
   - In your GitHub repository, go to:
     ```
     Settings → Secrets and Variables → Actions
     ```
  - Add the following secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `EC2_HOST`
  - `EC2_SSH_KEY`
  - `EC2_USER`
  - `IBM_API_KEY`
  - `IBM_CLOUD_HOST`
  - `IBM_CLOUD_SSH_KEY`


9. **Commit and Push Changes**
   ```bash
   git add .
   git commit -m "Updated IPs and config for deployment"
   git push origin main
   ```

10. **Trigger GitHub Actions**
   - GitHub Actions will automatically run the pipeline or trigger it manually:
     ```bash
     gh workflow run deploy.yml
     ```

11. **Access the Website**
   - Open an **incognito/private browser window**.
   - Enter the AWS EC2 public IP in the address bar.
   - You should see the deployed web application.

   




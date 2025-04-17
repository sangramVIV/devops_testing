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


1. **Initialize Terraform**
   ```bash
   terraform init
   ```
2. **Terraform plan**
   ```bash
   terraform plan
   ```

3. **Apply Terraform Configuration**
   ```bash
   terraform apply
   ```


4. **Get Public IPs from Terraform Output**
   - Note the outputted IP addresses of both AWS and IBM Cloud instances.

5. **Update Ansible Inventory**
   - Open `inventory.ini` and replace the placeholder IPs with the actual IPs from Terraform output.

6. **Run Ansible Playbook**
   ```bash
   ansible-playbook -i inventory.ini playbook.yml
   ```


7. **Set Repository Secrets for CI/CD pipeline using github action**
   - In your GitHub repository, go to:
     ```
     Settings → Secrets and Variables → Actions
     ```
  - Add the following secrets:
  - `AWS_ACCESS_KEY_ID`
  - `AWS_SECRET_ACCESS_KEY`
  - `EC2_HOST` -- EC2 PUBLIC IP
  - `EC2_SSH_KEY`
  - `EC2_USER`
  - `IBM_API_KEY`
  - `IBM_CLOUD_HOST` -- VSI FLOATING IP (EVERY TIME  ASSIGN WITH A NEW IP)
  - `IBM_CLOUD_SSH_KEY`


8. **Trigger GitHub Actions**
   - GitHub Actions will automatically run the pipeline or trigger it manually:
     ```bash
     gh workflow run ci_cd.yml
     ```

9. **Access the Website**
   - Open an **incognito/private browser window**.
   - Enter the AWS EC2 public IP in the address bar.
   - You should see the deployed web application.







## 🚀 Future Scope

### 🔧 NGINX Installation & Reverse Proxy Setup

 -NGINX Installation and Reverse Proxy Configuration
 -Set up NGINX as a reverse proxy to route traffic to backend services (e.g., Node.js, Docker containers).

 -Optimize performance with gzip compression, caching headers, and security hardening.

 -Automate the NGINX configuration reload with zero downtime using:




###  Blue-Green Deployment Using Docker
   -Implement Blue-Green Deployment to achieve zero downtime deployments:

   -Maintain two production environments (Blue = current live, Green = new build).

   -Deploy new build to Green, run tests, and verify health checks.

   -Switch live traffic from Blue to Green using:

   -NGINX reverse proxy update

   -Docker network alias changes

   -Rollback instantly by switching back to Blue if errors occur.

   -This approach improves reliability and enables quick recovery from failed deployments.




## 📄 License

This project is licensed under the [MIT License](LICENSE).

You are free to use, modify, and distribute this software with proper attribution. See the LICENSE file for full details.


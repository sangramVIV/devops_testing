module "aws_infra" {
  source      = "./aws_instances"
}


module "ibm_infra" {
  source      = "./ibm_instances"
}


output "aws_instance_public_ip" {
  value = module.aws_infra.instance_public_ip

}

output "ibm_instance_public_ip"{
  value = module.ibm_infra.floating_ip_address
}
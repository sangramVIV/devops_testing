terraform {
  required_providers {
    ibm = {
      source = "IBM-Cloud/ibm"
    }
  }
}

provider "ibm" {
  region           = "eu-de"
  ibmcloud_api_key = "ZJMXDHQxV344JkUdu1VNUYm-pbmDNHV1McxB04uB1iSY"
}




# Get existing resources by name
data "ibm_is_vpc" "existing_vpc" {
  name = "eu-de-default-vpc"  # Replace with your VPC name
}

data "ibm_is_subnet" "existing_subnet" {
  name = "eu-de-2-default-subnet"  # Replace with your subnet name
}

data "ibm_is_ssh_key" "existing_key" {
  name = "ibmssh"  
}

# Create instance using names instead of IDs
resource "ibm_is_instance" "example" {
  name    = "example-vsi"
  image   = "r010-30c25951-3392-419c-a843-d37c43820ada"  # CentOS Stream 9
  profile = "bx2-2x8"
  zone    = "eu-de-2"
  vpc     = data.ibm_is_vpc.existing_vpc.id

  primary_network_interface {
    subnet = data.ibm_is_subnet.existing_subnet.id
  }

  keys = [data.ibm_is_ssh_key.existing_key.id]
}

resource "ibm_is_floating_ip" "fip" {
  name   = "example-vsi-fip-${random_id.suffix.hex}"
  target = ibm_is_instance.example.primary_network_interface[0].id
}

resource "random_id" "suffix" {
  byte_length = 4
}


output "floating_ip_address" {
  value = ibm_is_floating_ip.fip.address
}
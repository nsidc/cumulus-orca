#!/bin/bash
set -ex

export DR_AWS_ACCESS_KEY_ID=$bamboo_DR_AWS_ACCESS_KEY_ID
export DR_AWS_SECRET_ACCESS_KEY=$bamboo_DR_AWS_SECRET_ACCESS_KEY
export AWS_DEFAULT_REGION=$bamboo_AWS_DEFAULT_REGION

#remove old files from bamboo as they throw error
rm *.tf
git clone --branch develop --single-branch https://github.com/nasa/cumulus-orca.git && cd integration_test
#replace prefix with bamboo prefix variable
sed -e 's/PREFIX/'"$bamboo_PREFIX"'/g' dr-buckets.tf.template > dr-buckets.tf

if ! aws s3api head-bucket --bucket $bamboo_PREFIX-tf-state;;then
    echo "terraform state bucket is not created. Creating ..."
    aws s3api create-bucket --bucket $bamboo_PREFIX-tf-state  --region $AWS_REGION --create-bucket-configuration LocationConstraint=$AWS_REGION
    aws dynamodb create-table \
      --table-name $bamboo_PREFIX-tf-locks \
      --attribute-definitions AttributeName=LockID,AttributeType=S \
      --key-schema AttributeName=LockID,KeyType=HASH \
      --billing-mode PAY_PER_REQUEST \
      --region $AWS_REGION
else
    echo "terraform state bucket present."
fi

#configruing S3 backend
echo "terraform {
  backend \"s3\" {
    bucket = \"$bamboo_PREFIX-tf-state\"
    region = \"$AWS_REGION\"
    dynamodb_table = \"$bamboo_PREFIX-tf-locks\"
  }
}"

terraform init -input=false
echo "Deploying S3  buckets in Disaaster Recovery account"
terraform apply \
  -auto-approve \
  -input=false

#copy terraform state file to the created tf-state bucket
aws s3 cp terraform.tfstate s3://$bamboo_PREFIX-dr-tf-state/dr-buckets-tf/terraform.tfstate
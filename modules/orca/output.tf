## Lambda Module Outputs (orca_lambda)
## =============================================================================
# Ingest Lambdas
# ------------------------------------------------------------------------------
output "orca_lambda_copy_to_glacier_cumulus_translator_arn" {
  description = "AWS ARN of the ORCA copy_to_glacier_cumulus_translator lambda."
  value       = module.orca_lambdas.copy_to_glacier_cumulus_translator_arn
}

output "orca_lambda_copy_to_glacier_arn" {
  description = "AWS ARN of the ORCA copy_to_glacier lambda."
  value       = module.orca_lambdas.copy_to_glacier_arn
}

output "orca_lambda_orca_catalog_reporting_arn" {
  value = module.orca_lambdas.orca_catalog_reporting_arn
}


# Recovery Lambdas
# ------------------------------------------------------------------------------
output "orca_lambda_extract_filepaths_for_granule_arn" {
  description = "AWS ARN of the ORCA extract_filepaths_for_granule lambda."
  value       = module.orca_lambdas.extract_filepaths_for_granule_arn
}


output "orca_lambda_request_files_arn" {
  description = "AWS ARN of the ORCA request_files lambda."
  value       = module.orca_lambdas.request_files_arn
}


output "orca_lambda_copy_files_to_archive_arn" {
  description = "AWS ARN of the ORCA copy_files_to_archive lambda."
  value       = module.orca_lambdas.copy_files_to_archive_arn
}

output "orca_lambda_request_status_for_granule_arn" {
  description = "AWS ARN of the ORCA request_status_for_granule lambda."
  value       = module.orca_lambdas.request_status_for_granule_arn
}


output "orca_lambda_request_status_for_job_arn" {
  description = "AWS ARN of the ORCA request_status_for_job lambda."
  value       = module.orca_lambdas.request_status_for_job_arn
}

output "orca_lambda_post_copy_request_to_queue_arn" {
  description = "AWS ARN of the ORCA post_copy_request_to_queue lambda."
  value       = module.orca_lambdas.post_copy_request_to_queue_arn
}

output "orca_catalog_reporting_api_invoke_url" {
  description = "The URL to invoke the API for catalog reporting lambda"
  value       = module.orca_lambdas.catalog_reporting_api_invoke_url
}

## Workflow Module Outputs (orca_workflows)
## =============================================================================
## No workflow outputs currently requested/needed


## SQS Module Outputs (orca_sqs)
## =============================================================================
output "orca_sqs_metadata_queue_arn" {
  description = "The ARN of the metadata-queue SQS"
  value       = module.orca_sqs.orca_sqs_metadata_queue_arn
}

output "orca_sqs_metadata_queue_id" {
  description = "The URL of the metadata-queue SQS"
  value       =  module.orca_sqs.orca_sqs_metadata_queue_id
}


output "orca_sqs_staged_recovery_queue_arn" {
  description = "The ARN of the staged-recovery-queue SQS"
  value       = module.orca_sqs.orca_sqs_staged_recovery_queue_arn
}


output "orca_sqs_staged_recovery_queue_id" {
  description = "The URL ID of the staged-recovery-queue SQS"
  value       = module.orca_sqs.orca_sqs_staged_recovery_queue_id
}


output "orca_sqs_status_update_queue_arn" {
  description = "The ARN of the status-update-queue SQS"
  value       = module.orca_sqs.orca_sqs_status_update_queue_arn
}


output "orca_sqs_status_update_queue_id" {
  description = "The URL ID of the status-update-queue SQS"
  value       = module.orca_sqs.orca_sqs_status_update_queue_id
}
## Secretsmanager Module Outputs (orca_secretsmanager)
## =============================================================================
output "orca_secretsmanager_arn" {
  description = "The Amazon Resource Name (ARN) of the AWS secretsmanager"
  value       = module.orca_secretsmanager.secretsmanager_arn
}
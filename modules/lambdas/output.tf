## Module outputs
## =============================================================================
output "vpc_postgres_ingress_all_egress_id" {
  description = "Security Group ID for PostgreSQL access."
  value       = module.lambda_security_group.vpc_postgres_ingress_all_egress_id
}


## Lambda Outputs
## =============================================================================
# Ingest Lambdas
# ------------------------------------------------------------------------------
output "copy_to_glacier_arn" {
  description = "AWS ARN for the copy_to_glacier lambda."
  value       = aws_lambda_function.copy_to_glacier.arn
}

output "orca_catalog_reporting_arn" {
  description = "AWS ARN for the orca_catalog_reporting lambda."
  value       = aws_lambda_function.orca_catalog_reporting_dummy.arn
}


# Recovery Lambdas
# ------------------------------------------------------------------------------
output "extract_filepaths_for_granule_arn" {
  description = "AWS ARN for the extract_filepaths_for_granule lambda."
  value       = aws_lambda_function.extract_filepaths_for_granule.arn
}


output "request_files_arn" {
  description = "AWS ARN for the request_files lambda."
  value       = aws_lambda_function.request_files.arn
}


output "copy_files_to_archive_arn" {
  description = "AWS ARN for the copy_files_to_archive lambda."
  value       = aws_lambda_function.copy_files_to_archive.arn
}

output "request_status_for_granule_arn" {
  description = "AWS ARN for the request_status_for_granule lambda."
  value       = aws_lambda_function.request_status_for_granule.arn
}


output "request_status_for_job_arn" {
  description = "AWS ARN for the request_status_for_job lambda."
  value       = aws_lambda_function.request_status_for_job.arn
}

output "post_copy_request_to_queue_arn" {
  description = "AWS ARN for the post_copy_request_to_queue lambda."
  value       = aws_lambda_function.post_copy_request_to_queue.arn
}


# Utility Lambdas
# ------------------------------------------------------------------------------
output "db_deploy_function_name" {
  description = "AWS Function Name for the db_deploy lambda."
  value       = aws_lambda_function.db_deploy.function_name
}

# API gateway for catalog reporting lambda
# ------------------------------------------------------------------------------
output "catalog_reporting_api_invoke_url" {
  value       = aws_api_gateway_stage.orca_catalog_reporting_api_stage.invoke_url
  description = "The URL to invoke the API for catalog reporting lambda"
}

# API gateway for request_status_for_granule lambda
# ------------------------------------------------------------------------------
output "request_status_for_granule_api_invoke_url" {
  value       = aws_api_gateway_stage.request_status_for_granule_api_stage.invoke_url
  description = "The URL to invoke the API for request_status_for_granule lambda"
}

# API gateway for request_status_for_job lambda
# ------------------------------------------------------------------------------
output "request_status_for_job_api_invoke_url" {
  value       = aws_api_gateway_stage.request_status_for_job_api_stage.invoke_url
  description = "The URL to invoke the API for request_status_for_job lambda"
}
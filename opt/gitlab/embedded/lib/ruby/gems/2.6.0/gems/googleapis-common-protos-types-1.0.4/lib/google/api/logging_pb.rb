# Generated by the protocol buffer compiler.  DO NOT EDIT!
# source: google/api/logging.proto

require 'google/protobuf'

require 'google/api/annotations_pb'
Google::Protobuf::DescriptorPool.generated_pool.build do
  add_message "google.api.Logging" do
    repeated :producer_destinations, :message, 1, "google.api.Logging.LoggingDestination"
    repeated :consumer_destinations, :message, 2, "google.api.Logging.LoggingDestination"
  end
  add_message "google.api.Logging.LoggingDestination" do
    optional :monitored_resource, :string, 3
    repeated :logs, :string, 1
  end
end

module Google
  module Api
    Logging = Google::Protobuf::DescriptorPool.generated_pool.lookup("google.api.Logging").msgclass
    Logging::LoggingDestination = Google::Protobuf::DescriptorPool.generated_pool.lookup("google.api.Logging.LoggingDestination").msgclass
  end
end
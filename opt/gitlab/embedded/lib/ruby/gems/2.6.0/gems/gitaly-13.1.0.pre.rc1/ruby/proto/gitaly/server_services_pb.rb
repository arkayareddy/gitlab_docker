# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: server.proto for package 'gitaly'

require 'grpc'
require 'server_pb'

module Gitaly
  module ServerService
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'gitaly.ServerService'

      rpc :ServerInfo, ServerInfoRequest, ServerInfoResponse
      rpc :DiskStatistics, DiskStatisticsRequest, DiskStatisticsResponse
    end

    Stub = Service.rpc_stub_class
  end
end
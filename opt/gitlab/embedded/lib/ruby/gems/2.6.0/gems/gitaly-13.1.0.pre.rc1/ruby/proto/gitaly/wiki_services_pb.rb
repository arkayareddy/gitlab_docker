# Generated by the protocol buffer compiler.  DO NOT EDIT!
# Source: wiki.proto for package 'gitaly'

require 'grpc'
require 'wiki_pb'

module Gitaly
  module WikiService
    class Service

      include GRPC::GenericService

      self.marshal_class_method = :encode
      self.unmarshal_class_method = :decode
      self.service_name = 'gitaly.WikiService'

      rpc :WikiGetPageVersions, WikiGetPageVersionsRequest, stream(WikiGetPageVersionsResponse)
      rpc :WikiWritePage, stream(WikiWritePageRequest), WikiWritePageResponse
      rpc :WikiUpdatePage, stream(WikiUpdatePageRequest), WikiUpdatePageResponse
      rpc :WikiDeletePage, WikiDeletePageRequest, WikiDeletePageResponse
      # WikiFindPage returns a stream because the page's raw_data field may be arbitrarily large.
      rpc :WikiFindPage, WikiFindPageRequest, stream(WikiFindPageResponse)
      rpc :WikiFindFile, WikiFindFileRequest, stream(WikiFindFileResponse)
      rpc :WikiGetAllPages, WikiGetAllPagesRequest, stream(WikiGetAllPagesResponse)
      rpc :WikiListPages, WikiListPagesRequest, stream(WikiListPagesResponse)
    end

    Stub = Service.rpc_stub_class
  end
end
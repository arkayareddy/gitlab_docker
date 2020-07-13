# frozen_string_literal: true

module Gitlab
  module Badge
    module Pipeline
      ##
      # Class that represents a pipeline badge template.
      #
      # Template object will be passed to badge.svg.erb template.
      #
      class Template < Badge::Template
        STATUS_RENAME = { 'success' => 'passed' }.freeze
        STATUS_COLOR = {
          success: '#4c1',
          failed: '#e05d44',
          running: '#dfb317',
          pending: '#dfb317',
          preparing: '#a7a7a7',
          canceled: '#9f9f9f',
          skipped: '#9f9f9f',
          unknown: '#9f9f9f'
        }.freeze

        def initialize(badge)
          @entity = badge.entity
          @status = badge.status
          @key_text = badge.customization.dig(:key_text)
          @key_width = badge.customization.dig(:key_width)
        end

        def key_text
          if @key_text && @key_text.size <= MAX_KEY_SIZE
            @key_text
          else
            @entity.to_s
          end
        end

        def value_text
          STATUS_RENAME[@status.to_s] || @status.to_s
        end

        def key_width
          if @key_width && @key_width.between?(1, MAX_KEY_SIZE)
            @key_width
          else
            62
          end
        end

        def value_width
          54
        end

        def value_color
          STATUS_COLOR[@status.to_sym] || STATUS_COLOR[:unknown]
        end
      end
    end
  end
end
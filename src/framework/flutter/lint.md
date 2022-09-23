# 代码规范

- 在pubspec.yaml中添加依赖

```yaml
dev_dependencies:
  dart_code_metrics: ^4.19.0
  analyzer: ^4.7.0
```

- 新建analysis_options.yaml

```yaml
analyzer:
  exclude: [ios/**, android/**, test/**]
  plugins:
    - dart_code_metrics
  errors:
    empty_constructor_bodies: error
    missing_required_param: error
    always_use_package_imports: error
    avoid_types_as_parameter_names: error
    close_sinks: error
    unnecessary_statements: warning
    non_constant_identifier_names: warning

dart_code_metrics:
  anti-patterns:
    - long-method
    - long-parameter-list
  metrics:
    cyclomatic-complexity: 20
    maximum-nesting-level: 5
    number-of-parameters: 4
    source-lines-of-code: 50
  metrics-exclude:
    - test/**
  rules:
    # common
    - newline-before-return
    - no-boolean-literal-compare
    - no-empty-block
    - prefer-trailing-comma:
        break-on: 3
    - prefer-conditional-expressions
    - no-equal-then-else
    - avoid-collection-methods-with-unrelated-types
    - avoid-dynamic
    - avoid-ignoring-return-values
    - avoid-non-null-assertion
    - avoid-top-level-members-in-tests
    - avoid-unused-parameters
    - binary-expression-operand-order
    - double-literal-format
    - no-object-declaration
    - prefer-async-await
    - prefer-correct-identifier-length:
        exceptions: [a, b, c]
        max-identifier-length: 30
        min-identifier-length: 4
    - prefer-correct-type-name
    - prefer-first
    - prefer-immediate-return
    - prefer-iterable-of
    - prefer-last
    - prefer-match-file-name
    - prefer-moving-to-variable:
        allowed-duplicated-chains: 3
    - tag-name

    # flutter
    - always-remove-listener
    - avoid-shrink-wrap-in-lists
    - avoid-unnecessary-setstate
    - avoid-use-expanded-as-spacer
    - avoid-wrapping-in-padding

```
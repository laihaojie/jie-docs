# 代码规范

- 在pubspec.yaml中添加依赖

```yaml
dev_dependencies:
  dart_code_metrics: ^4.19.0
  analyzer: ^4.7.0
```

- 新建analysis_options.yaml

```yaml
include: package:flutter_lints/flutter.yaml

analyzer:
  exclude: [ios/**, android/**, test/**, lib/models/**]
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
  # anti-patterns:
  # - long-method
  # - long-parameter-list
  metrics:
    cyclomatic-complexity: 20
    maximum-nesting-level: 5
    number-of-parameters: 4
    source-lines-of-code: 50
  metrics-exclude:
    - test/**

  rules-exclude:
    - lib/models/**

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
    - avoid-dynamic:
        severity: performance
    # - avoid-ignoring-return-values
    # - avoid-non-null-assertion
    - avoid-top-level-members-in-tests
    - avoid-unused-parameters
    - binary-expression-operand-order
    - double-literal-format
    - no-object-declaration
    - prefer-correct-identifier-length:
        exceptions: [a, b, c]
        max-identifier-length: 30
        min-identifier-length: 2
    - prefer-correct-type-name
    - prefer-first
    - prefer-immediate-return
    - prefer-iterable-of
    - prefer-last
    - prefer-match-file-name
    # - prefer-moving-to-variable:
    #     allowed-duplicated-chains: 3
    - tag-name

    # flutter
    - always-remove-listener
    - avoid-shrink-wrap-in-lists
    - avoid-unnecessary-setstate
    - avoid-use-expanded-as-spacer
    - avoid-wrapping-in-padding

linter:
  rules:
    # This list is derived from the list of all available lints located at
    # https://github.com/dart-lang/linter/blob/master/example/all.yaml
    # # 希望给函数加上返回值类型
    # - always_declare_return_types
    # # 将控制结构表达式与其语句分开。(提前返回 一行内) 不被允许 if (condition) return;
    # - always_put_control_body_on_new_line
    # - always_put_required_named_parameters_first # we prefer having parameters in the same order as fields https://github.com/flutter/flutter/issues/10219
    - always_require_non_null_named_parameters
    # 强制必须指定类型
    # - always_specify_types
    # - always_use_package_imports # we do this commonly
    - annotate_overrides
    # - avoid_annotating_with_dynamic # conflicts with always_specify_types
    - avoid_bool_literals_in_conditional_expressions
    # - avoid_catches_without_on_clauses # blocked on https://github.com/dart-lang/linter/issues/3023
    # - avoid_catching_errors # blocked on https://github.com/dart-lang/linter/issues/3023
    # 避免定义只包含静态成员的类。
    # - avoid_classes_with_only_static_members
    - avoid_double_and_int_checks
    # 避免对“动态”目标进行方法调用或属性访问。
    # - avoid_dynamic_calls
    - avoid_empty_else
    - avoid_equals_and_hash_code_on_mutable_classes
    - avoid_escaping_inner_quotes
    - avoid_field_initializers_in_const_classes
    # - avoid_final_parameters # incompatible with prefer_final_parameters
    - avoid_function_literals_in_foreach_calls
    - avoid_implementing_value_types
    - avoid_init_to_null
    - avoid_js_rounded_ints
    # - avoid_multiple_declarations_per_line # seems to be a stylistic choice we don't subscribe to
    - avoid_null_checks_in_equality_operators
    # - avoid_positional_boolean_parameters # would have been nice to enable this but by now there's too many places that break it
    - avoid_print
    # - avoid_private_typedef_functions # we prefer having typedef (discussion in https://github.com/flutter/flutter/pull/16356)
    - avoid_redundant_argument_values
    - avoid_relative_lib_imports
    - avoid_renaming_method_parameters
    - avoid_return_types_on_setters
    - avoid_returning_null
    - avoid_returning_null_for_future
    - avoid_returning_null_for_void
    # - avoid_returning_this # there are enough valid reasons to return `this` that this lint ends up with too many false positives
    - avoid_setters_without_getters
    - avoid_shadowing_type_parameters
    - avoid_single_cascade_in_expression_statements
    - avoid_slow_async_io
    - avoid_type_to_string
    - avoid_types_as_parameter_names
    # - avoid_types_on_closure_parameters # conflicts with always_specify_types
    - avoid_unnecessary_containers
    - avoid_unused_constructor_parameters
    - avoid_void_async
    # - avoid_web_libraries_in_flutter # we use web libraries in web-specific code, and our tests prevent us from using them elsewhere
    - await_only_futures
    - camel_case_extensions
    - camel_case_types
    - cancel_subscriptions
    # - cascade_invocations # doesn't match the typical style of this repo
    - cast_nullable_to_non_nullable
    # - close_sinks # not reliable enough
    # - comment_references # blocked on https://github.com/dart-lang/linter/issues/1142
    - conditional_uri_does_not_exist
    # - constant_identifier_names # needs an opt-out https://github.com/dart-lang/linter/issues/204
    - control_flow_in_finally
    - curly_braces_in_flow_control_structures
    - depend_on_referenced_packages
    - deprecated_consistency
    # - diagnostic_describe_all_properties # enabled only at the framework level (packages/flutter/lib)
    - directives_ordering
    # - discarded_futures # not yet tested
    # - do_not_use_environment # there are appropriate times to use the environment, especially in our tests and build logic
    - empty_catches
    - empty_constructor_bodies
    - empty_statements
    - eol_at_end_of_file
    - exhaustive_cases
    - file_names
    - flutter_style_todos
    - hash_and_equals
    - implementation_imports
    - iterable_contains_unrelated_type
    # - join_return_with_assignment # not required by flutter style
    - leading_newlines_in_multiline_strings
    - library_names
    - library_prefixes
    - library_private_types_in_public_api
    # - lines_longer_than_80_chars # not required by flutter style
    - list_remove_unrelated_type
    # - literal_only_boolean_expressions # too many false positives: https://github.com/dart-lang/linter/issues/453
    - missing_whitespace_between_adjacent_strings
    - no_adjacent_strings_in_list
    - no_default_cases
    - no_duplicate_case_values
    - no_leading_underscores_for_library_prefixes
    - no_leading_underscores_for_local_identifiers
    - no_logic_in_create_state
    # - no_runtimeType_toString # ok in tests; we enable this only in packages/
    - non_constant_identifier_names
    - noop_primitive_operations
    - null_check_on_nullable_type_parameter
    - null_closures
    # - omit_local_variable_types # opposite of always_specify_types
    # - one_member_abstracts # too many false positives
    - only_throw_errors # this does get disabled in a few places where we have legacy code that uses strings et al
    - overridden_fields
    - package_api_docs
    - package_names
    - package_prefixed_library_names
    # - parameter_assignments # we do this commonly
    - prefer_adjacent_string_concatenation
    - prefer_asserts_in_initializer_lists
    # - prefer_asserts_with_message # not required by flutter style
    - prefer_collection_literals
    - prefer_conditional_assignment
    - prefer_const_constructors
    - prefer_const_constructors_in_immutables
    - prefer_const_declarations
    - prefer_const_literals_to_create_immutables
    # - prefer_constructors_over_static_methods # far too many false positives
    - prefer_contains
    # - prefer_double_quotes # opposite of prefer_single_quotes
    - prefer_equal_for_default_values
    # - prefer_expression_function_bodies # conflicts with https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#consider-using--for-short-functions-and-methods
    - prefer_final_fields
    - prefer_final_in_for_each
    - prefer_final_locals
    # - prefer_final_parameters # we should enable this one day when it can be auto-fixed (https://github.com/dart-lang/linter/issues/3104), see also parameter_assignments
    - prefer_for_elements_to_map_fromIterable
    - prefer_foreach
    - prefer_function_declarations_over_variables
    - prefer_generic_function_type_aliases
    - prefer_if_elements_to_conditional_expressions
    - prefer_if_null_operators
    - prefer_initializing_formals
    - prefer_inlined_adds
    # - prefer_int_literals # conflicts with https://github.com/flutter/flutter/wiki/Style-guide-for-Flutter-repo#use-double-literals-for-double-constants
    - prefer_interpolation_to_compose_strings
    - prefer_is_empty
    - prefer_is_not_empty
    - prefer_is_not_operator
    - prefer_iterable_whereType
    # - prefer_mixin # Has false positives, see https://github.com/dart-lang/linter/issues/3018
    # - prefer_null_aware_method_calls # "call()" is confusing to people new to the language since it's not documented anywhere
    - prefer_null_aware_operators
    - prefer_relative_imports
    - prefer_single_quotes
    - prefer_spread_collections
    - prefer_typing_uninitialized_variables
    - prefer_void_to_null
    - provide_deprecation_message
    # - public_member_api_docs # enabled on a case-by-case basis; see e.g. packages/analysis_options.yaml
    - recursive_getters
    # - require_trailing_commas # blocked on https://github.com/dart-lang/sdk/issues/47441
    - secure_pubspec_urls
    - sized_box_for_whitespace
    # - sized_box_shrink_expand # not yet tested
    - slash_for_doc_comments
    - sort_child_properties_last
    - sort_constructors_first
    # - sort_pub_dependencies # prevents separating pinned transitive dependencies
    - sort_unnamed_constructors_first
    - test_types_in_equals
    - throw_in_finally
    - tighten_type_of_initializing_formals
    # - type_annotate_public_apis # subset of always_specify_types
    - type_init_formals
    # - unawaited_futures # too many false positives, especially with the way AnimationController works
    - unnecessary_await_in_return
    - unnecessary_brace_in_string_interps
    - unnecessary_const
    - unnecessary_constructor_name
    # - unnecessary_final # conflicts with prefer_final_locals
    - unnecessary_getters_setters
    # - unnecessary_lambdas # has false positives: https://github.com/dart-lang/linter/issues/498
    - unnecessary_late
    - unnecessary_new
    - unnecessary_null_aware_assignments
    - unnecessary_null_aware_operator_on_extension_on_nullable
    - unnecessary_null_checks
    - unnecessary_null_in_if_null_operators
    - unnecessary_nullable_for_final_variable_declarations
    - unnecessary_overrides
    - unnecessary_parenthesis
    # - unnecessary_raw_strings # what's "necessary" is a matter of opinion; consistency across strings can help readability more than this lint
    - unnecessary_statements
    - unnecessary_string_escapes
    - unnecessary_string_interpolations
    - unnecessary_this
    - unnecessary_to_list_in_spreads
    - unrelated_type_equality_checks
    - unsafe_html
    - use_build_context_synchronously
    # - use_colored_box # not yet tested
    # - use_decorated_box # not yet tested
    # - use_enums # not yet tested
    - use_full_hex_values_for_flutter_colors
    - use_function_type_syntax_for_parameters
    - use_if_null_to_convert_nulls_to_bools
    - use_is_even_rather_than_modulo
    - use_key_in_widget_constructors
    - use_late_for_private_fields_and_variables
    - use_named_constants
    - use_raw_strings
    - use_rethrow_when_possible
    - use_setters_to_change_properties
    # - use_string_buffers # has false positives: https://github.com/dart-lang/sdk/issues/34182
    - use_super_parameters
    - use_test_throws_matchers
    # - use_to_and_as_if_applicable # has false positives, so we prefer to catch this by code-review
    - valid_regexps
    - void_checks

```
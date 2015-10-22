# title
jey

## 1.10.6 (2015-07-22)

### Workarounds:

  - only warn on invalid gemspecs (@indirect)

### Bugfixes:

  - fix installing dependencies in the correct order (#3799, @pducks32)
  - fix sorting of mixed DependencyLists (#3762, @tony-spataro-rs)
  - fix `install_if` conditionals when using the block form (@danieltdt)

## 1.10.5 (2015-06-24)

### Workarounds:

  - don't add or update BUNDLED WITH during `install` with no changes (@segiddins)

### Bugfixes:

  - fix sorting of mixed DependencyLists with RubyGems >= 2.23 (#3762, @tony-spataro-rs)
  - speed up resolver for path and git gems (@segiddins)
  - fix `install --force` to not reinstall Bundler (#3743, @karlo57)

## 1.10.4 (2015-06-16)

### Workarounds:

  - don't add BUNDLED WITH to the lock when Spring runs `check` over and over (@indirect)

### Bugfixes:

  - display "with native extensions" log output correctly (@ivantsepp)
  - alias `i` to `install`, `c` to `check`, and `e` to `exec` (@indirect)
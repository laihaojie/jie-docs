# CPU架构

## armeabi-v7a

- 此 ABI 适用于基于 32 位 ARM 的 CPU，2016年之前大部分Android手机的cpu都是此架构。

## arm64-v8a

- 此 ABI 适用于基于 ARMv8-A 的 CPU，支持 64 位 AArch64 架构，一般从2016年开始，主流Android手机的cpu架构都是arm64的。

## x86

- 此ABI支持X86架构，像Intel、AMD的cpu都是基于此架构。
在2012-2016这段时间，为了赶上移动互联网的浪潮，Intel和Nvidia专门为Android手机和平板推出过X86架构的CPU，可惜都失败了。现在一般不需要适配此架构，除非APK需要安装在Intel平板上。

## x86_64

- 此ABI支持x86-64位架构的CPU。同上


::: tip
对于mips、mips64、armeabi这些架构来说，Android从Android Plugin for Gradle 3.1.0（对应gradle 4.4）后不再支持，因为从NDK r17开始，不再将这些 ABI 作为支持的目标。
:::
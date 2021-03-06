<template>
    <div class="text-field">
        <label ref="mdc-text-field"
               class="mdc-text-field"
               :class="classes">
            <template v-if="outlined">
                <span class="mdc-notched-outline">
                    <span class="mdc-notched-outline__leading"></span>
                    <span v-if="label" class="mdc-notched-outline__notch">
                        <span :id="`${id}-label`" class="mdc-floating-label">
                            {{ label }}
                        </span>
                    </span>
                    <span class="mdc-notched-outline__trailing"></span>
                </span>
            </template>
            <template v-else>
                <span class="mdc-text-field__ripple"></span>
                <span v-if="label"
                      :id="`${id}-label`"
                      class="mdc-floating-label">
                    {{ label }}
                </span>
            </template>
            <TextFieldIcon v-if="leadingIcon" leading>
                {{ leadingIcon }}
            </TextFieldIcon>
            <input :id="id"
                   ref="input"
                   class="mdc-text-field__input"
                   :aria-labelledby="label ? `${id}-label` : ''"
                   :aria-controls="help ? `${id}-helper` : ''"
                   :aria-describedby="help ? `${id}-helper` : ''"
                   :disabled="disabled"
                   :required="required"
                   :readonly="readonly"
                   :value="value"
                   :type="type"
                   @input="onInputEvent" />
            <TextFieldIcon v-if="trailingIcon" trailing>
                {{ trailingIcon }}
            </TextFieldIcon>
            <!--TextFieldIcon v-else-if="validation" trailing>
                error
            </TextFieldIcon-->
            <span v-if="!outlined" class="mdc-line-ripple"></span>
        </label>
        <div v-if="help" class="mdc-text-field-helper-line">
            <TextFieldHelperText :id="`${id}-helper`" persistent>
                {{ help }}
            </TextFieldHelperText>
        </div>
        <div v-else-if="validation" class="mdc-text-field-helper-line">
            <TextFieldHelperText :id="`${id}-helper`" validation>
                {{ validation }}
            </TextFieldHelperText>
        </div>
    </div>
</template>

<script lang="ts">
    import Vue from "vue";
    import { MDCTextField } from "@material/textfield";

    import TextFieldHelperText from "./text-field-helper-text.vue";
    import TextFieldIcon from "./text-field-icon.vue";

    interface TextFieldData { _textField?: MDCTextField; }

    export default Vue.extend({
        name: "TextField",
        components: { TextFieldHelperText, TextFieldIcon },
        props: {
            value: {
                default: "",
                type: String
            },
            disabled: {
                default: false,
                type: Boolean
            },
            outlined: {
                default: false,
                type: Boolean
            },
            required: {
                default: false,
                type: Boolean
            },
            readonly: {
                default: false,
                type: Boolean
            },
            id: {
                required: true,
                type: String
            },
            label: {
                default: "",
                type: String
            },
            help: {
                default: "",
                type: String
            },
            leadingIcon: {
                default: "",
                type: String
            },
            trailingIcon: {
                default: "",
                type: String
            },
            type: {
                default: "text",
                type: String
            },
            validation: {
                default: "",
                type: String
            }
        },

        data: (): TextFieldData => ({ }),

        computed: {
            classes(): Record<string, boolean>
            {
                return {
                    "mdc-text-field--disabled": this.disabled,
                    "mdc-text-field--filled": !this.outlined,
                    "mdc-text-field--no-label": !this.label,
                    "mdc-text-field--outlined": this.outlined,
                    "mdc-text-field--with-leading-icon": !!this.leadingIcon,
                    "mdc-text-field--with-trailing-icon": !!this.trailingIcon
                };
            }
        },

        mounted: function(): void
        {
            this._textField = new MDCTextField(this.$refs["mdc-text-field"] as Element);
        },

        methods: {
            onInputEvent(evt: InputEvent)
            {
                this.$emit("input", (evt.target as HTMLInputElement)!.value);
            }
        }
    });
</script>

<style lang="scss" scoped>
    .text-field
    {
        display: inline-block;
        margin-bottom: 1em;
        width: 100%;

        & > .mdc-text-field
        {
            width: 100%;

            &.mdc-text-field--outlined
            {
                margin-top: 0.25em;
            }
        }
    }
</style>

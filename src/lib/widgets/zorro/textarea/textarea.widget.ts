import { ControlWidget } from "../../../widget";
import { generateClass } from "../../../utils/cls";

export class TextAreaWidget extends ControlWidget {

    constructor() {
        super();
    }

    getTemplate(schema) {
        let listOfClassName = this.getLayoutClass(schema);
        let templ = `
        <div nz-form-label nz-col [nzSpan]="${schema.span_label}"  class="${listOfClassName.join(' ')}">
            <label for="${schema.formId}" nz-form-item-required [nzRequired]="required">
                <span> ${schema.title || ''}
                    ${schema.description ? `<nz-tooltip [nzTitle]="'${schema.description}'"> <i nz-tooltip class="anticon anticon-question-circle-o"></i> </nz-tooltip>` : ''}
                </span>
            </label>
        </div>
        <div nz-form-control nz-col
            ${schema.span_control ? `[nzSpan]="${schema.span_control}"` : ""}
            ${schema.offset_control ? `[nzOffset]="${schema.offset_control}"` : ""}
         nzHasFeedback>
            <nz-input
            [(ngModel)]="${schema.modelName}.${schema.name}"
            id="${schema.formId}"
            name="${schema.name}"
            nzType="textarea"
            placeholder="${schema.placeholder ? schema.placeholder : ' '}"
            ${schema.readOnly ? `[nzReadonly]="true"` : ""}
            ${(schema.autosize) ? `[nzAutosize]="${schema.autosize}"` : ""}></nz-input>
        </div>
        `;

        return templ;
    }
}
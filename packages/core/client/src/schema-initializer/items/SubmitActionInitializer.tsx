import React from 'react';

import { ActionInitializer } from './ActionInitializer';

export const SubmitActionInitializer = (props) => {
  const schema = {
    title: '{{ t("Submit") }}',
    'x-action': 'submit',
    'x-component': 'Action',
    // 'x-designer': 'Action.Designer',
    'x-toolbar': 'ActionSchemaToolbar',
    'x-settings': 'actionSettings:updateSubmit',
    'x-component-props': {
      type: 'primary',
      htmlType: 'submit',
      // useProps: '{{ bp.useSubmitActionProps }}',
    },
  };
  return <ActionInitializer {...props} schema={schema} />;
};

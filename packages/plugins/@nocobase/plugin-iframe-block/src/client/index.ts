import { Plugin } from '@nocobase/client';
import { IframeBlockProvider } from './IframeBlockProvider';
import { iframeBlockSchemaSettings } from './schemaSettings';

export class IframeBlockPlugin extends Plugin {
  async load() {
    this.app.schemaSettingsManager.add(iframeBlockSchemaSettings);
    this.app.use(IframeBlockProvider);
    const blockInitializers = this.app.schemaInitializerManager.get('BlockInitializers');
    blockInitializers?.add('otherBlocks.iframe', {
      title: '{{t("Iframe")}}',
      Component: 'IframeBlockInitializer',
    });

    const createFormBlockInitializers = this.app.schemaInitializerManager.get('CreateFormBlockInitializers');
    createFormBlockInitializers?.add('otherBlocks.iframe', {
      title: '{{t("Iframe")}}',
      Component: 'IframeBlockInitializer',
    });

    const recordBlockInitializers = this.app.schemaInitializerManager.get('RecordBlockInitializers');
    recordBlockInitializers?.add('otherBlocks.iframe', {
      title: '{{t("Iframe")}}',
      Component: 'IframeBlockInitializer',
    });

    const recordFormBlockInitializers = this.app.schemaInitializerManager.get('RecordFormBlockInitializers');
    recordFormBlockInitializers?.add('otherBlocks.iframe', {
      title: '{{t("Iframe")}}',
      Component: 'IframeBlockInitializer',
    });
  }
}

export default IframeBlockPlugin;

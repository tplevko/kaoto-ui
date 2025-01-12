import { ICapabilities } from '@kaoto/types';

export const capabilitiesStub: ICapabilities = {
  dsls: [
    {
      output: 'true',
      input: 'true',
      validationSchema: '/v1/capabilities/Integration/schema',
      deployable: 'true',
      name: 'Integration',
      description: 'An Integration defines a workflow of actions and steps.',
      stepKinds: '[CAMEL-CONNECTOR, EIP, EIP-BRANCH]',
    },
    {
      output: 'true',
      input: 'true',
      validationSchema: '/v1/capabilities/Camel Route/schema',
      deployable: 'false',
      name: 'Camel Route',
      description: 'A camel route is a non deployable in cluster workflow of actions and steps.',
      stepKinds: '[CAMEL-CONNECTOR, EIP, EIP-BRANCH]',
    },
    {
      output: 'true',
      input: 'true',
      validationSchema: '/v1/capabilities/Kamelet/schema',
      deployable: 'true',
      name: 'Kamelet',
      description:
        'A Kamelet is a snippet of a route. It defines meta building blocks or steps that can be reused on integrations.',
      stepKinds: '[CAMEL-CONNECTOR, EIP, EIP-BRANCH]',
    },
    {
      output: 'true',
      input: 'true',
      validationSchema: '/v1/capabilities/KameletBinding/schema',
      deployable: 'true',
      name: 'KameletBinding',
      description:
        'Kamelet Bindings are used to create simple integrations that link a start step to an end step with optional intermediate action steps.',
      stepKinds: '[KAMELET, KNATIVE]',
    },
  ],
};

import type { Schema, Struct } from '@strapi/strapi';

export interface ComponentContent extends Struct.ComponentSchema {
  collectionName: 'components_component_contents';
  info: {
    displayName: 'content';
  };
  attributes: {
    description: Schema.Attribute.Text;
    imageUrl: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    subTitle: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.content': ComponentContent;
    }
  }
}

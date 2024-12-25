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

export interface ComponentUserTerms extends Struct.ComponentSchema {
  collectionName: 'components_component_user_terms';
  info: {
    displayName: 'userTerms';
  };
  attributes: {
    desc: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'component.content': ComponentContent;
      'component.user-terms': ComponentUserTerms;
    }
  }
}

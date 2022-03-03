import S from '@sanity/desk-tool/structure-builder'
import { MdSettings } from "react-icons/md";
import { MdPerson } from "react-icons/md";

const hiddenDocTypes = listItem =>
  !['category', 'post', 'siteSettings'].includes(listItem.getId())

export default () =>
  S.list()
    .title('Content')
    .items([
      S.listItem()
        .title('Photographic evidence')
        .schemaType('post')
        .child(S.documentTypeList('post').title('Photos')),
      S.listItem()
        .title('Locations')
        .schemaType('category')
        .child(S.documentTypeList('category').title('Locations')),
      S.listItem()
        .title('Settings')
        .icon(MdSettings)
        .child(
          S.editor()
            .id('siteSettings')
            .schemaType('siteSettings')
            .documentId('siteSettings')
        ),
        // This returns an array of all the document types
      // defined in schema.js. We filter out those that we have
      // defined the structure above
    ...S.documentTypeListItems().filter(hiddenDocTypes)
    ])

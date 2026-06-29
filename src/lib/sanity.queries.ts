export const POSTS_LIST = `
*[_type=="post" && isPublished==true] | order(publishedAt desc){
  _id,
  title,
  penName,
  excerpt,
  "slug": slug.current,
  publishedAt,
  coverImage{
    alt,
    asset->{
      _id,
      url
    }
  }
}
`;


export const POST_BY_SLUG = `*[_type == "post" && slug.current == $slug][0]{
  title,
  penName,
  excerpt,
  body{
    el[] {
      ...,
      _type == "image" => { ..., asset-> }
    },
    en[] {
      ...,
      _type == "image" => { ..., asset-> }
    }
  },
  metaTitle,
  metaDescription,
  publishedAt,
  "slug": slug.current
}`;

/**
 * NOTES
 * Schema note has: body (text), publishedAt (datetime), isPublished (boolean)
 * No slug/title/excerpt, because you only want to display them as simple notes.
 */

export const NOTES_LIST = `
*[_type=="note" && isPublished==true] | order(publishedAt desc){
  _id,
  body,
  publishedAt,
  isPublished
}
`;


/**
 * These are kept for compatibility (if some component imports them),
 * but since notes have no slug, they return null / latest note only.
 * If you are not using them anywhere, you can delete them safely.
 */

// No slug in note schema → this will always return null
export const NOTE_BY_SLUG = `
*[_type=="note" && isPublished==true && slug.current==$slug][0]{
  _id,
  body,
  publishedAt,
  isPublished
}
`;

// Latest note (works fine without slug)
export const LATEST_NOTE = `
*[_type=="note" && isPublished==true] | order(publishedAt desc)[0]{
  _id,
  body,
  publishedAt,
  isPublished
}
`;

export const SETTINGS = `
*[_type=="settings"] | order(_updatedAt desc)[0]{
  appointmentsEnabled,
  appointmentsEmbedUrl,
  contactEmail,
  contentMode,
  quietMessage
}
`;

export const CONTACT_SETTINGS = `
*[_type=="settings"] | order(_updatedAt desc)[0]{
  contactEmail
}
`;

export const APPOINTMENTS_SETTINGS = `
*[_type=="settings"] | order(_updatedAt desc)[0]{
  appointmentsEnabled,
  appointmentsEmbedUrl
}
`;

export const HOME_SETTINGS = `
*[_type=="settings"] | order(_updatedAt desc)[0]{
  contentMode,
  quietMessage
}
`;

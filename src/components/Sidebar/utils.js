/* eslint-disable array-callback-return */
import { Logo } from './logo';
const LinkPage = (data, pagename) => {
  const dataMenu = {
    _meta: {
      type: data.type,
      lang: data.lang,
      uid: data.uid,
      url: data.uid,
      // url: data.url,
    },
  };
  return (
    <>
      <a id={'123'}>
        {data.text}
        <div className='underline'></div>
      </a>
    </>
  );
};

export const LinkLogo = () => (
  <a>
    <Logo />
  </a>
  // </Link>
);

const validNavbarLink = menuLink => {
  const { label, link } = menuLink;
  if (link.link_type === 'Document' && link.uid !== '' && label[0].text !== '') {
    return true;
  } else if (
    (link.link_type === 'Web' || link.type === 'Media') &&
    link.url !== '' &&
    label[0].text !== ''
  ) {
    return true;
  } else {
    return false;
  }
};

export const renderedMenuLinks = (menuLinks, pageName) =>
  Array.isArray(menuLinks)
    ? menuLinks.map((menuLink, index) => {
      const { label, link } = menuLink;
      if (validNavbarLink(menuLink)) {
        return (
          <>
            <LinkPage
              pageName={pageName}
              key={index + '_menu_links'}
              uid={link?.uid || ''}
              lang={link?.lang || ''}
              type={link?.type || ''}
              text={label || '-'}
              id={link?.id || '#'}
              slug={link?.slug || '#'}
              url={link?.url || ''}
            />
          </>
        );
      }
    })
    : '';

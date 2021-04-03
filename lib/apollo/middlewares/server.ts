import {HttpLink} from '@apollo/client';

const serverLink: HttpLink = new HttpLink({
  uri: 'https://countries-274616.ew.r.appspot.com/',
});

export default serverLink;

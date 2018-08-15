import React from 'react';
import { FormattedMessage } from 'react-intl';

import Wrapper from './Wrapper';
import messages from './messages';

function Footer() {
  return (
    <Wrapper>
      <section>
        <FormattedMessage
          {...messages.authorMessage}
          values={{
            author: <a href="https://victor77dev.github.io/">Victor</a>,
          }}
        />
      </section>
    </Wrapper>
  );
}

export default Footer;

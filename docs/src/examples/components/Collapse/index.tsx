import React, { memo } from 'react';
import { useState } from 'react';
import { useCallback } from 'react';

import Button from '@eduzz/houston-ui/Button';
import Collapse from '@eduzz/houston-ui/Collapse';

const CollapseExample = memo(() => {
  const [visibled, setVisibled] = useState<boolean>(false);

  const handleToggle = useCallback(() => setVisibled(visibled => !visibled), []);

  const handleEnter = useCallback(() => console.log('collapsed'), []);

  return (
    <>
      <Button onClick={handleToggle}>toggle collapse</Button>

      <Collapse visibled={visibled}>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit qui nam dolores dignissimos! Repudiandae
        unde facilis commodi quibusdam perspiciatis, excepturi animi quia veniam placeat, ut odio nemo nesciunt totam
        minima?
      </Collapse>

      <Collapse visibled={visibled} destroyOnClose onEnter={handleEnter}>
        <br />
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati necessitatibus cupiditate beatae excepturi
        vitae, reprehenderit labore minima, et, voluptatum delectus corrupti accusamus iure nisi dolores ipsum
        reiciendis fugiat esse consequatur?
      </Collapse>
    </>
  );
});

export default CollapseExample;

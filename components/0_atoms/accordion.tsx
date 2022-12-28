import { memo, useState } from 'react';
import ChevronDownIcon from '../assets/svg/chevronDown';

function Accordion({ title, children, ...props }: { title: string; children: any }) {
  const [show, setShow] = useState(false);

  return (
    <div className={` ${show ? ' border border-black/80 ' : '  '}`}>
      <div
        className={` w-full px-4 prose py-2 border-b cursor-pointer select-none capitalize
          ${!show ? 'bg-gray-300' : 'bg-gray-200 '}
        `}
        onClick={() => setShow(!show)}
      >
        <h4 className='flex flex-row'>
          {title}

          <ChevronDownIcon
            className={`transition-all ml-auto shrink-0 pt-1 ${show ? 'rotate-180 ' : 'rotate-0'}`}
            width={20}
            height={20}
          />
        </h4>
      </div>

      {show && (
        <div className=' flex flex-col py-4 space-y-4 bg-gray-100' {...props}>
          {children}
        </div>
      )}
    </div>
  );
}

export default memo(Accordion);

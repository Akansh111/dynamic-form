import { Dialog, Transition } from '@headlessui/react';
import { get, set } from 'lodash-es';
import { Fragment, memo, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { useFormData } from '../store/useFormData';
import { useServerData } from '../store/useServerData';
import { MAIN_TYPES } from '../types/elementType';

const redStar = <span className='text-red-500'>*</span>;

export const initialNodeData = {
  node: {
    id: `${uuidv4()}`,
    label: '',
    type: MAIN_TYPES.GROUP,
    style: {
      gridColumn: '12',
    },
  },
  mainType: MAIN_TYPES.GROUP,
  subType: '',
  style: '',
};

function AddElement({
  nodePath,
}: {
  nodePath: {
    obj: object;
    path: string;
  };
}) {
  let [isOpen, setIsOpen] = useState(false);
  const [elData, setElData] = useState(initialNodeData);
  const setServerData = useServerData((s) => s.setServerData);
  const setFormData = useFormData((s) => s.setFormData);
  const formData = useFormData((s) => s.formData);

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  function saveElement() {
    let otherProps = {
      type: elData.subType.length > 0 ? elData.subType : elData.mainType,
    } as any;
    if (elData.mainType.includes(MAIN_TYPES.CUSTOM_TAG)) {
      otherProps = {
        ...otherProps,
        type: 'customTag-' + elData.subType,
      };
    }
    if (elData.mainType === MAIN_TYPES.GROUP) {
      otherProps = {
        ...otherProps,
        type: MAIN_TYPES.GROUP,
        groupLabel: elData.node.label,
      };

      if (elData?.node?.minInstance || elData?.node?.maxInstance) {
        otherProps = {
          ...otherProps,
          childNodes: [],
          minInstance: `${elData?.node?.minInstance || 1}`,
          maxInstance: `${elData?.node?.maxInstance || 2}`,
        };
      }
    }

    // Converting the style into css styles, from node.style string
    const styleArray = elData.style.split(';');
    otherProps = {
      ...otherProps,
      style: { ...elData.node.style },
    };
    styleArray.forEach((el) => {
      const styleKey = el.split(':')[0];
      const styleValue = el.split(':')[1];
      if (styleKey && styleValue) {
        otherProps = {
          ...otherProps,
          style: {
            ...otherProps.style,
            [styleKey]: styleValue,
          },
        };
      }
    });

    const finalNode = {
      ...JSON.parse(JSON.stringify(elData.node)),
      ...otherProps,
    };
    console.log('finalNode', elData.node, otherProps, finalNode);
    // setServerData(set(nodePath.obj, `${nodePath.path}`, [...get(nodePath.obj, `${nodePath.path}`), elData]));

    setFormData(
      set(nodePath.obj, `${nodePath.path}`, [
        ...get(nodePath.obj, `${nodePath.path}`),
        {
          node: finalNode,
        },
      ]),
    );
    setElData(initialNodeData);
  }

  useEffect(() => {
    console.log(formData);
  }, [formData]);

  useEffect(() => {
    console.log(elData);
  }, [elData]);

  return (
    <>
      <div className=' flex items-center justify-center'>
        <button
          type='button'
          onClick={openModal}
          className='w-full text-white bg-cyan-700 hover:bg-cyan-800 focus:ring-4 focus:ring-cyan-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-2 dark:bg-cyan-600 dark:hover:bg-cyan-700 focus:outline-none dark:focus:ring-cyan-800 transition-all flex flex-row space-x-2 justify-center'
        >
          <span>
            <PlusIcon />
          </span>
          <span>Add Element</span>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as='div' className='relative z-10' onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='bg-black/60 backdrop-blur-sm fixed inset-0' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex items-center justify-center min-h-full p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel
                  as='form'
                  className='rounded-2xl w-full max-w-md p-6 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl'
                  onSubmit={(e) => {
                    e.preventDefault();
                    saveElement();
                  }}
                >
                  <div className='text-lg font-medium leading-6 text-gray-900'>Add Element</div>

                  <div className='my-6 space-y-2 prose'>
                    <div>
                      <h4>Id: {elData.node.id}</h4>
                    </div>

                    <div className='w-full'>
                      <h4>Label {redStar}</h4>

                      <input
                        className='w-full rounded-lg'
                        type='text'
                        placeholder={'e.g. Enter Name'}
                        required
                        onChange={(e) => {
                          setElData({
                            ...elData,
                            node: {
                              ...elData.node,
                              label: e.target.value,
                            },
                          });
                        }}
                      />
                    </div>

                    <div className='flex flex-row space-x-4 transition-all'>
                      <div className='w-full'>
                        <h4>Node Type {redStar}</h4>
                        <select
                          className='w-full rounded-lg'
                          onChange={(e) => {
                            setElData({
                              ...elData,
                              mainType: e.target.value,
                            });
                          }}
                          required
                        >
                          {Object.values(MAIN_TYPES).map((v) => (
                            <option key={v} value={v}>
                              {v}
                            </option>
                          ))}
                        </select>
                      </div>

                      {elData.mainType !== MAIN_TYPES.GROUP && (
                        <div className='w-full'>
                          <h4>
                            {elData.mainType === MAIN_TYPES.VALUE_NODE ? 'Input Type' : 'tag name'} {redStar}
                          </h4>

                          <input
                            className='rounded-lg'
                            type='text'
                            placeholder={elData.mainType === MAIN_TYPES.VALUE_NODE ? 'date' : 'h2'}
                            onChange={(e) => {
                              setElData({
                                ...elData,
                                subType: e.target.value,
                              });
                            }}
                            required
                          />
                        </div>
                      )}
                    </div>

                    {elData.mainType === MAIN_TYPES.GROUP && (
                      <div className='flex flex-row space-x-4 transition-all'>
                        <div>
                          <h4>Min Instance</h4>
                          <input
                            type={'number'}
                            min={1}
                            className='w-full rounded-lg'
                            placeholder={`minInstance`}
                            value={elData.node?.minInstance ? elData.node.minInstance : 1}
                            onChange={(e) => {
                              setElData({
                                ...elData,
                                node: {
                                  ...elData.node,
                                  minInstance: e.target.value,
                                },
                              });
                            }}
                          />
                        </div>

                        <div>
                          <h4>Max Instance</h4>
                          <input
                            type={'number'}
                            min={elData.node?.minInstance ? elData.node?.minInstance : 1}
                            className='w-full rounded-lg'
                            placeholder={`minInstance`}
                            value={elData.node?.maxInstance ? elData.node.maxInstance : 1}
                            onChange={(e) => {
                              setElData({
                                ...elData,
                                node: {
                                  ...elData.node,
                                  maxInstance: e.target.value,
                                },
                              });
                            }}
                          />
                        </div>
                      </div>
                    )}

                    {elData.mainType !== MAIN_TYPES.GROUP && (
                      <div>
                        <h4>Data / Value</h4>
                        <input
                          type={'text'}
                          className='w-full rounded-lg'
                          placeholder={`data / value`}
                          value={elData.node?.data?.value ? elData.node?.data?.value : ''}
                          onChange={(e) => {
                            setElData({
                              ...elData,
                              node: {
                                ...elData.node,
                                data: {
                                  ...elData.node?.default,
                                  value: e.target.value,
                                },
                              },
                            });
                          }}
                        />
                      </div>
                    )}

                    <div>
                      <h4>Paste CSS Styles</h4>
                      <textarea
                        className='w-full rounded-lg'
                        placeholder={`e.g.:\nbackground-color: #3b82f6; color: #ffffff;`}
                        onChange={(e) => {
                          setElData({
                            ...elData,

                            style: e.target.value,
                          });
                        }}
                      />
                    </div>

                    <div className='w-full'>
                      <h4>
                        Grid size {redStar} ({elData?.node?.style?.gridColumn ? elData?.node?.style?.gridColumn : '0'}
                        /12){' '}
                      </h4>
                      <select
                        className='w-full rounded-lg'
                        onChange={(e) => {
                          setElData({
                            ...elData,
                            node: {
                              ...elData.node,
                              style: {
                                gridColumn: e.target.value,
                              },
                            },
                          });
                        }}
                        required
                      >
                        {[...Array(12)].map((e, i) => (
                          <>
                            <option key={i} value={i + 1} selected={i + 1 === 12}>
                              {i + 1}
                            </option>
                          </>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className='flex justify-end mt-4 space-x-4'>
                    <button
                      type='submit'
                      className='hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 transition-all bg-transparent border border-transparent rounded-md'
                      onClick={closeModal}
                    >
                      Cancel
                    </button>

                    <button
                      type='button'
                      className='hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2 inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 transition-all bg-blue-100 border border-transparent rounded-md'
                      onClick={saveElement}
                    >
                      Save
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

function PlusIcon(props: any) {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      fill='none'
      viewBox='0 0 24 24'
      strokeWidth={1.5}
      stroke='currentColor'
      className='w-6 h-6'
      {...props}
    >
      <path
        strokeLinecap='round'
        strokeLinejoin='round'
        d='M13.5 16.875h3.375m0 0h3.375m-3.375 0V13.5m0 3.375v3.375M6 10.5h2.25a2.25 2.25 0 002.25-2.25V6a2.25 2.25 0 00-2.25-2.25H6A2.25 2.25 0 003.75 6v2.25A2.25 2.25 0 006 10.5zm0 9.75h2.25A2.25 2.25 0 0010.5 18v-2.25a2.25 2.25 0 00-2.25-2.25H6a2.25 2.25 0 00-2.25 2.25V18A2.25 2.25 0 006 20.25zm9.75-9.75H18a2.25 2.25 0 002.25-2.25V6A2.25 2.25 0 0018 3.75h-2.25A2.25 2.25 0 0013.5 6v2.25a2.25 2.25 0 002.25 2.25z'
      />
    </svg>
  );
}

export default memo(AddElement);

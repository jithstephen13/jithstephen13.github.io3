import Link from 'next/link'
import { useRouter } from 'next/router'
import React from 'react'

export const LinkCompo = (item) => {
                              const {page,label} = item
                            return (<Link href={`/${page}`}
                                                    className={"block lg:inline-block text-white  hover:text-neutral-500 dark:text-neutral-100 relative group"} >
                                                                    {label}
                                                                  <span className='h-[1px] inline-block w-0 bg-white absolute
                                                                    left-0 bottom-0.5 group-hover:w-full transition-[width] ease
                                                                                duration-300 '>&nbsp;</span>
                                    </Link>)}

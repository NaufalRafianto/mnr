'use client'
import { usePathname } from 'next/navigation'
import React from 'react'
import { StyledLink, UnstyledLink } from '../ui/link/Link'
import { FaGithub } from 'react-icons/fa'
import { merge } from '@/lib/merge'

export default function Header() {
    const pathname = usePathname()
    return (
        <header className="fixed z-50 flex w-full items-center justify-center  gap-56 bg-white bg-opacity-0 p-2.5 shadow backdrop-blur-md max-md:gap-16">
            <div className=" inline-flex cursor-pointer items-center gap-2 text-2xl font-bold ">
                <UnstyledLink href="/">mnr</UnstyledLink>
            </div>
            <div className="inline-flex items-center gap-4">
                <StyledLink
                    className={merge(
                        pathname === '/'
                            ? 'rounded border-0 bg-violet-700 bg-opacity-30 px-2 py-1 text-violet-500 after:bg-violet-500 after:hover:w-0'
                            : pathname === '/project'
                            ? 'after:bg-pink-500'
                            : pathname === '/send-letter'
                            ? 'after:bg-cyan-500'
                            : 'after:bg-orange-500'
                    )}
                    href="/"
                >
                    Home
                </StyledLink>
                <StyledLink
                    className={merge(
                        pathname === '/project'
                            ? 'rounded border-0 bg-pink-700 bg-opacity-30 px-2 py-1 text-pink-500 after:bg-pink-500 after:hover:w-0'
                            : pathname === '/'
                            ? ''
                            : pathname === '/send-letter'
                            ? 'after:bg-cyan-500'
                            : 'after:bg-orange-500'
                    )}
                    href="/project"
                >
                    Project
                </StyledLink>
                <div className={'inline-flex items-center gap-2'}>
                    <StyledLink
                        href="https://github.com/NaufalRafianto/mnr"
                        className={`${
                            pathname === '/project'
                                ? ' after:bg-pink-500'
                                : pathname === '/'
                                ? ''
                                : pathname === '/send-letter'
                                ? 'after:bg-cyan-500'
                                : 'after:bg-orange-500'
                        }`}
                    >
                        Source
                    </StyledLink>
                    <FaGithub />
                </div>
            </div>
        </header>
    )
}

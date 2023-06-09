import Button from '@/components/ui/button/Button'
import { StyledLink } from '@/components/ui/link/Link'
import StarsContainer from '@/container/StarsContainer'
import { prisma } from '@/lib/prisma'
import React from 'react'
import { MdKeyboardArrowRight } from 'react-icons/md'
import { Heading } from '@/components/ui/Heading'
import Image from 'next/image'
import Content from '@/container/ContentContainer'

async function getData(id: string) {
    return await prisma.project.findUnique({ where: { id } })
}

export async function generateMetadata({ params }: { params: { id: string } }) {
    const { id } = params
    const data = await getData(id)
    return {
        title: data?.title,
        description: data?.detail,
    }
}

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = params
    const data = await getData(id)

    return (
        <StarsContainer className="h-auto">
            <div className="my-3 inline-flex items-center space-x-2 px-3 max-md:mb-10 max-md:ml-5">
                <StyledLink href="/project" className="font-bold">
                    Project
                </StyledLink>
                <div className="mt-2 inline-flex">
                    <MdKeyboardArrowRight className="mt-1" />
                    {data?.title}
                </div>
            </div>
            <div className="h-auto max-md:mx-auto max-md:mb-10 max-md:w-11/12">
                {data && (
                    <div key={data?.title}>
                        <p className="max-md:text-justify">{data?.detail}</p>
                        <div className="flex flex-col">
                            <div className="inline-flex space-x-2 pb-3 pl-10 pt-10 max-md:pl-2">
                                <Button type="button" className="px-1.5 py-1 text-sm font-bold capitalize">
                                    Platfrom
                                </Button>
                                <div>{data?.type}</div>
                            </div>
                            <div className="inline-flex space-x-2 pb-3 pl-10 max-md:pl-2">
                                <Button type="button" className="px-1.5 py-1 text-sm font-bold">
                                    Url
                                </Button>
                                <StyledLink href={data?.link}>{data?.link}</StyledLink>
                            </div>
                            {data?.stack && (
                                <div className="inline-flex items-center space-x-2 pl-10 max-md:pl-2">
                                    <Button type="button" className="px-1.5 py-1 text-sm font-bold">
                                        Stack
                                    </Button>
                                    <div>{data?.stack}</div>
                                </div>
                            )}
                        </div>
                    </div>
                )}
            </div>
            <Content className="h-[105vh] ">
                <Heading className="text-center uppercase">Gallery</Heading>
                <div className="flex flex-col items-center gap-3">
                    {data?.gallery.map((item: string, i: number) => (
                        <div
                            key={i}
                            className="relative flex h-[310px] w-[550px] items-end justify-center rounded bg-gray-50 bg-opacity-75 max-md:h-[205px] max-md:w-[355px]"
                        >
                            <div className="absolute left-1 top-1 inline-flex space-x-1">
                                <div className="h-2 w-2 rounded bg-red-500"></div>
                                <div className="h-2 w-2 rounded bg-yellow-500"></div>
                                <div className="h-2 w-2 rounded bg-green-500"></div>
                            </div>
                            <div className="py-1">
                                <Image className="rounded" alt="gallery" width={540} height={303} src={item} />
                            </div>
                        </div>
                    ))}
                </div>
            </Content>
        </StarsContainer>
    )
}

export default page

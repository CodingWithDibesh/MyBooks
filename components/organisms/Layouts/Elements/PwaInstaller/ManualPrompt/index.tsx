import { Icon } from "@iconify/react"
import { Button, Card } from "flowbite-react"
import { confirmAlert } from "react-confirm-alert"

type TManualPrompt = {
    doNotShowAgain: (close: () => void) => void
    alreadyInstalled: (close: () => void) => void
    isIOS: boolean,
    isAndroid: boolean
}

// This Prompt is only for devices which have PWA support and cannot install automatically
export const manualPrompt = async ({ doNotShowAgain, alreadyInstalled, isIOS, isAndroid }: TManualPrompt) => {
    confirmAlert({
        customUI: ({ onClose: close }) => {
            return <Card horizontal={true} className="bg-white" style={{ width: "auto" }}>
                <div className="relative -top-4 -right-4 text-[#F62B2B]">
                    <div className="flex justify-end">
                        <Icon
                            icon="zondicons:close-solid"
                            width={20}
                            className="mr-3 h-6 sm:h-9 cursor-pointer"
                            onClick={close}
                        />
                    </div>
                </div>
                <div className="flex flex-col gap-6 -mt-12">
                    <div className="flex flex-row justify-between gap-6">
                        <div className="flex items-start -mr-6">
                            <Icon
                                icon="twemoji:books"
                                width={42}
                                className="mr-3 h-6 sm:h-9"
                            />
                        </div>
                        <div className="flex flex-col gap-2">
                            <h4 className="text-[18px] font-bold">
                                Install My Books app?
                            </h4>
                            <p className="text-[14px]">
                                We would recommend installing the app for better experience.
                            </p>
                            <div className="flex justify-start">
                                {/* Prompt for ios Devices */}
                                {isIOS && !isAndroid ?
                                    <div className="flex flex-col gap-2 mt-2 text-[14px]">
                                        <div className="inline-flex items-center gap-2 font-bold">
                                            1.  Click the <Icon icon="material-symbols:ios-share" /> icon
                                        </div>
                                        2. Scroll down and then click
                                        <div className="inline-flex items-center gap-2 font-bold">
                                            3.  Add to Home Screen <Icon icon="icon-park-outline:add" />
                                        </div>
                                    </div>
                                    :
                                    <div className="flex flex-col gap-2 mt-2 text-[14px]">
                                        <div className="inline-flex items-center gap-2 font-bold">
                                            1. Click the <Icon icon="zondicons:dots-horizontal-triple" /> icon
                                        </div>
                                        2.  Scroll down and then click
                                        <div className="inline-flex items-center gap-2 font-bold">
                                            3. <Icon icon="ic:baseline-add-to-home-screen" /> Add to Home Screen
                                        </div>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                            color="gray"
                            className="w-full"
                            onClick={() => alreadyInstalled(close)}
                        >
                            {"I've already installed"}
                            <Icon
                                icon="fluent:checkbox-checked-20-filled"
                                className="ml-2 text-green-500"
                                width={20}
                            />
                        </Button>
                        <Button
                            color="gray"
                            className="w-full"
                            onClick={() => doNotShowAgain(close)}
                        >
                            {"Don't Show it again"}
                            <Icon
                                icon="teenyicons:message-no-access-solid"
                                className="ml-2 text-blue-500"
                                width={20}
                            />
                        </Button>
                    </div>
                </div>
            </Card>
        },
    })
}

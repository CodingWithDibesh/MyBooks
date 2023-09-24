import { Icon } from "@iconify/react"
import { Button, Card } from "flowbite-react"
import { confirmAlert } from "react-confirm-alert"

type TInstallationPrompt = {
    doNotShowAgain: (close: () => void) => void
    onInstall: (close: () => void) => void
}

// This Prompt is for devices which supports auto installation on PWA
export const installationPrompt = async ({ doNotShowAgain, onInstall }: TInstallationPrompt) => {
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
                        </div>
                    </div>
                    <div className="flex flex-col sm:flex-row gap-2">
                        <Button
                            color="gray"
                            className="w-full"
                            onClick={() => doNotShowAgain(close)}
                        >
                            {"I've already installed"}
                            <Icon
                                icon="fluent:checkbox-checked-20-filled"
                                className="ml-2 text-blue-500"
                                width={20}
                            />
                        </Button>
                        <Button
                            color="gray"
                            className="w-full"
                            onClick={() => onInstall(close)}
                        >
                            Install
                            <Icon
                                icon="ic:baseline-install-mobile"
                                className="ml-2 text-green-500"
                                width={20}
                            />
                        </Button>
                    </div>
                </div>
            </Card>
        },
    })
}

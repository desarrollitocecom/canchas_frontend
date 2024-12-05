import { Step, StepLabel, Stepper } from "@mui/material";
import { styled } from '@mui/material/styles';
import Check from '@mui/icons-material/Check';
import StepConnector, { stepConnectorClasses } from '@mui/material/StepConnector';
import { useState } from "react";
import { Outlet } from "react-router-dom";
const ReservaLayout = () => {
    const steps = ['Información', 'Horarios', 'Pago'];
    const [Activestep, setActivestep] = useState(0)

    return (
        <div className="w-full h-full py-10">
            <main className="w-full h-full flex justify-center bg-neutral-50 dark:bg-neutral-950">
                <div className="w-full max-w-[700px] flex flex-col items-center">
                    <Stepper className="w-full" alternativeLabel activeStep={Activestep} connector={<QontoConnector />}>
                        {steps.map((label) => (
                            <Step key={label}>
                                <StepLabel StepIconComponent={QontoStepIcon}>{label}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>

                    <div className="w-[95%] flex justify-center overflow-hidden">
                        <div className="w-full border bg-white dark:border-neutral-700 mt-10 dark:bg-neutral-900 rounded-lg py-5 shadow">
                            <Outlet setActivestep={setActivestep} />
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}

export default ReservaLayout

const primaryColor = '#20ad4a'

const QontoConnector = styled(StepConnector)(({ theme }) => ({
    [`&.${stepConnectorClasses.alternativeLabel}`]: {
        top: 10,
        left: 'calc(-50% + 16px)',
        right: 'calc(50% + 16px)',
    },
    [`&.${stepConnectorClasses.active}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: primaryColor,
        },
    },
    [`&.${stepConnectorClasses.completed}`]: {
        [`& .${stepConnectorClasses.line}`]: {
            borderColor: primaryColor,
        },
    },
    [`& .${stepConnectorClasses.line}`]: {
        borderColor: '#eaeaf0',
        borderTopWidth: 3,
        borderRadius: 1,
        ...theme.applyStyles('dark', {
            borderColor: theme.palette.grey[800],
        }),
    },
}));

const QontoStepIconRoot = styled('div')(({ theme }) => ({
    color: '#eaeaf0',
    display: 'flex',
    height: 22,
    alignItems: 'center',
    '& .QontoStepIcon-completedIcon': {
        color: primaryColor,
        zIndex: 1,
        fontSize: 18,
    },
    '& .QontoStepIcon-circle': {
        width: 8,
        height: 8,
        borderRadius: '50%',
        backgroundColor: 'currentColor',
    },
    ...theme.applyStyles('dark', {
        color: theme.palette.grey[700],
    }),
    variants: [
        {
            props: ({ ownerState }) => ownerState.active,
            style: {
                color: primaryColor,
            },
        },
    ],
}));

function QontoStepIcon(props) {
    const { active, completed, className } = props;

    return (
        <QontoStepIconRoot ownerState={{ active }} className={className}>
            {completed ? (
                <Check className="QontoStepIcon-completedIcon " />
            ) : (
                <div className="QontoStepIcon-circle" />
            )}
        </QontoStepIconRoot>
    );
}
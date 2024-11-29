import { Accordion, AccordionDetails, AccordionSummary, Typography } from '@mui/material';
import React, { useState } from 'react';

const MenuMobile = ({ value, label, labelExpanded, isOpen, onOpen, children }) => {
    return (
        <Accordion
            className='transition-all !rounded-2xl overflow-hidden !mt-0 !mb-0 px-1'
            sx={{
                boxShadow: isOpen ? '0 4px 8px rgba(0, 0, 0, 0.2)' : '0 2px 4px rgba(0, 0, 0, 0.1)', 
                borderRadius: '15px',
            }}
            expanded={isOpen}
            onChange={onOpen}
        >
            <AccordionSummary
                aria-controls="panel1a-content"
                id="panel1a-header"
                sx={{
                    '&.Mui-expanded': {
                        minHeight: '40px',
                    },
                    '& .Mui-expanded': {
                        margin: '0 0px',
                        marginTop: '10px',
                    },
                }}
            >
                {isOpen ? (
                    <span className="text-neutral-950 dark:text-neutral-100 text-lg font-bold">{labelExpanded}</span>
                ) : (
                    <div className="flex items-center justify-between text-sm w-full">
                        <span className="text-neutral-500 dark:text-neutral-300 font-bold">{label}</span>
                        <span className="text-neutral-950 dark:text-white font-bold">{value}</span>
                    </div>
                )}
            </AccordionSummary>
            <AccordionDetails style={{ overflowX: 'auto', display: 'flex',alignItems: 'center', flexDirection: 'column' }}>
                {children}
            </AccordionDetails>
        </Accordion>
    );
};

export default MenuMobile;

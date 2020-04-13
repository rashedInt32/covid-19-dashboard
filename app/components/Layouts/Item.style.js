export const list = `
position: relative;
width: 100%;
align-items: center;
display: flex;
padding: 7px 0;
overflow: hidden;

`;

export const listBefore = `
content: '';
position: absolute;
left: 3px;
top: -2px;
width: 32px;
height: 109%;
border-radius: 17px;
z-index: 2;
transform: rotate(-10deg);
border-right-color: transparent;
border-top-right-radius: 0;
border-bottom-right-radius: 0;
border-top-left-radius: 16px;
`;

export const listAfter = `
content: '';
position: absolute;
left: 0;
top: 0;
width: 8px;
height: 100%;
z-index: 2;
`;

export const linkBefore = `
content: '';
position: absolute;
right: -4px;
top: -16px;
width: 20px;
height: 20px;
border-radius: 9px;
border-top-color: transparent;
border-left-color: transparent;
border-bottom-left-radius: 0;
`;
export const linkAfter = `
content: '';
position: absolute;
right: -4px;
bottom: -16px;
width: 20px;
height: 20px;
border-radius: 9px;
border-bottom-color: transparent;
border-left-color: transparent;
border-top-left-radius: 0;
`;

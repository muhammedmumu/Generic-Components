// YAxisTickWithIcon.jsx
import React from 'react';
import { Tooltip } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';

const YAxisTickWithIcon = ({
  x,
  y,
  payload,
  labelWithIcon,
  tooltipText = 'Click on Bar to view the list',
  icon: Icon = InfoIcon,
  width = 180,
  height = 24,
  xForeignObjectCoordinate = 160,
  yForeignObjectCoordinate = 10,
  customIconStyles = {},
  customLabelStyles = {}
}) => {
  const hasIcon = payload?.value === labelWithIcon;

  return (
    <>
      {hasIcon ? (
        <foreignObject
          x={x - xForeignObjectCoordinate}
          y={y - yForeignObjectCoordinate}
          width={width}
          height={height}
          style={{ overflow: 'visible' }}
        >
          <div
            xmlns="http://www.w3.org/1999/xhtml"
            style={{
              width: `${width}px`,
              height: `${height}px`,
              whiteSpace: 'nowrap',
              overflow: 'visible',
              display: 'block',
            }}
          >
            <Tooltip title={tooltipText} arrow>
              <span
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  justifyContent: 'flex-end',
                  cursor: 'pointer',
                }}
              >
                <Icon
                  sx={{
                    marginRight: 0.5,
                    flexShrink: 0,
                    fontSize: '18px',
                    color: (theme) => theme.palette.purple?.[250] || '#888',
                    ...customIconStyles
                  }}
                />
                <span style={{ color: '#666', fontSize: '12px', ...customLabelStyles }}>
                  {payload.value}
                </span>
              </span>
            </Tooltip>
          </div>
        </foreignObject>
      ) : (
        <text
          x={x - 6}
          y={y}
          dy={4}
          textAnchor="end"
          fill="#666"
          fontSize={12}
        >
          {payload.value}
        </text>
      )}
    </>
  );
};

export default YAxisTickWithIcon;

export const styleContent = (width: number, height: number) => ({
  __html: `
    .hst-popover[data-popper-placement='top'] #houston-tooltip-arrow {
      bottom: -4px;
      transform: unset;
    }

    .hst-popover[data-popper-placement='top-start'] #houston-tooltip-arrow {
      bottom: -4px;
      left: 10px !important;
      transform: unset !important;
    }

    .hst-popover[data-popper-placement='top-end'] #houston-tooltip-arrow {
      bottom: -4px;
      left:  ${width - 20}px !important;
      transform: unset !important;
    }

    .hst-popover[data-popper-placement='bottom'] #houston-tooltip-arrow {
      top: -4px;
      transform: unset;
    }

    .hst-popover[data-popper-placement='bottom-start'] #houston-tooltip-arrow {
      top: -4px;
      left: 10px !important;
      transform: unset !important;
    }

    .hst-popover[data-popper-placement='bottom-end'] #houston-tooltip-arrow {
      top: -4px;
      left:  ${width - 20}px !important;
      transform: unset !important;
    }

    .hst-popover[data-popper-placement='left-start'] #houston-tooltip-arrow {
      transform: unset !important;
      top: 10px !important;
      left: ${width - 4}px;
    }

    .hst-popover[data-popper-placement='left'] #houston-tooltip-arrow {
      transform: unset !important;
      top: ${height / 2 - 4}px !important;
      left: ${width - 4}px;
    }

    .hst-popover[data-popper-placement='left-end'] #houston-tooltip-arrow {
      transform: unset !important;
      top: ${height - 20}px !important;
      left: ${width - 4}px;
    }

    .hst-popover[data-popper-placement='right-start'] #houston-tooltip-arrow {
      transform: unset !important;
      top: 10px !important;
      right: ${width - 4}px;
    }

    .hst-popover[data-popper-placement='right'] #houston-tooltip-arrow {
      transform: unset !important;
      top: ${height / 2 - 4}px !important;
      right: ${width - 4}px;
    }

    .hst-popover[data-popper-placement='right-end'] #houston-tooltip-arrow {
      transform: unset !important;
      top: ${height - 20}px !important;
      right: ${width - 4}px;
    }
  `
});

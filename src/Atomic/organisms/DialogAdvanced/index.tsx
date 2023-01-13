import React, { FC } from "react";

import styled from "../../atoms/Styled";

import Box from "../../atoms/Box";
import Dialog from "../../atoms/Dialog";
import DialogActions from "../../atoms/DialogActions";
import DialogContent from "../../atoms/DialogContent";
import DialogTitle from "../../atoms/DialogTitle";
import Icon from "../../atoms/Icon";
import IconButton from "../../atoms/IconButton";

const StyledDialogTitle = styled(DialogTitle, {
  name: "StyledDialogTitle",
})(({ theme }) => ({
  position: "relative",
  fontSize: theme.typography.h6.fontSize,
  fontWeight: theme.typography.fontWeightBold,
  padding: theme.spacing(2),
}));

const StyledDialogContent = styled(DialogContent, {
  name: "StyledDialogContent",
})(({ theme }) => ({
  padding: theme.spacing(2),
}));

const StyledDialogActions = styled(DialogActions, {
  name: "StyledDialogActions",
})(({ theme }) => ({
  padding: theme.spacing(2),
}));

const ButtonBack = styled(IconButton, { name: "ButtonBack" })(({ theme }) => ({
  position: "absolute",
  top: theme.spacing(1),
  left: theme.spacing(1),
}));

const ButtonClose = styled(IconButton, { name: "ButtonClose" })(
  ({ theme }) => ({
    position: "absolute",
    top: theme.spacing(1),
    right: theme.spacing(1),
  })
);

interface Props {
  children?: any;
  onClose?: () => {};
  onBack?: () => {};
  restProps?: object;
}

const DialogAdvancedTitle: FC<Props> = ({
  children,
  onClose,
  onBack,
  restProps,
}) => {
  return (
    <StyledDialogTitle {...restProps}>
      {onBack && (
        <ButtonBack aria-label="back" onClick={onBack}>
          <Icon className="hi-system--Back" />
        </ButtonBack>
      )}
      <Box pl={onBack && 6} pr={onClose && 6}>
        {children}
      </Box>
      {onClose && (
        <ButtonClose aria-label="close" onClick={onClose}>
          <Icon className="hi-system--Close" />
        </ButtonClose>
      )}
    </StyledDialogTitle>
  );
};

interface PropsAdvanced {
  open: boolean;
  onClose?: any;
  onBack?: any;
  title?: any;
  content?: any;
  actions?: any;
  dialogProps?: object;
  dialogContentProps?: object;
  dialogActionsProps?: object;
  children?: any;
  disableBackdropClick?: boolean;
}

const DialogAdvanced: FC<PropsAdvanced> = ({
  open,
  onClose,
  onBack,
  title,
  content,
  actions,
  dialogProps,
  dialogContentProps,
  dialogActionsProps,
  children,
  disableBackdropClick,
}) => {
  return (
    <Dialog
      aria-labelledby="dialog-advanced"
      open={open}
      onClose={disableBackdropClick ? undefined : onClose}
      fullWidth
      maxWidth="sm"
      {...dialogProps}
    >
      {children || (
        <React.Fragment>
          {title && (
            <DialogAdvancedTitle onBack={onBack} onClose={onClose}>
              {title}
            </DialogAdvancedTitle>
          )}
          {content && (
            <StyledDialogContent {...dialogContentProps}>
              {content}
            </StyledDialogContent>
          )}
          {actions && (
            <StyledDialogActions {...dialogActionsProps}>
              {actions}
            </StyledDialogActions>
          )}
        </React.Fragment>
      )}
    </Dialog>
  );
};

export default DialogAdvanced;

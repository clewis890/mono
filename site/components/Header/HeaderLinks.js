/*eslint-disable*/
import React from "react";
import Link from "next/link";

// @material-ui/core components
import { makeStyles } from "@material-ui/core/styles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.js";

import styles from "assets/jss/nextjs-material-kit/components/headerLinksStyle.js";

const useStyles = makeStyles(styles);

export default function HeaderLinks(props) {
  const classes = useStyles();
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          dropdownList={[
            <Link href="/about">
              <a className={classes.dropdownLink}>
                About Me
              </a>
            </Link>
          ]}
        />
      </ListItem>
      <CustomDropdown
          noLiPadding
          navDropdown
          buttonText="Writing"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          
          dropdownList={[
            <Link href="/writing">
              <a className={classes.dropdownLink}>Writing</a>
            </Link>,
            <Link href="https://blog.dablonyc.com">
              <a className={classes.dropdownLink}>Blog</a>
            </Link>
          ]}
        />
    </List>
  );
}

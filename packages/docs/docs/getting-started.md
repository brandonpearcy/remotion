---
id: getting-started
title: Setup and Installation
sidebar_label: Installation
slug: /
---

import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';

## Prerequisites

The only dependencies for Remotion are FFMPEG and Node.js.

Please read these guides to install them in case you haven't yet.

- [Installing FFMPEG](https://github.com/adaptlearning/adapt_authoring/wiki/Installing-FFmpeg) - Minimum: Version 4.1.0
- [Installing Node.js](https://nodejs.org/en/download/) - Minimum: Version 12.10.0

## Installation

You can initialize a new Remotion video using

<Tabs
defaultValue="npm"
values={[
{ label: 'npm', value: 'npm', },
{ label: 'yarn', value: 'yarn', },
]
}>
<TabItem value="npm">

```bash
npm init video
```

  </TabItem>

  <TabItem value="yarn">

```bash
yarn create video
```

  </TabItem>
</Tabs>

That's it! Wait for the installation to be finished and follow the instructions in the terminal.

### Additional step for Linux users

Linux users need to install some additional packages to get Chrome/Puppeteer working correctly.

**Ubuntu**

```console
apt install -y gconf-service libasound2 libatk1.0-0 libc6 libcairo2 libcups2 libdbus-1-3 libexpat1 libfontconfig1 libgcc1 libgconf-2-4 libgdk-pixbuf2.0-0 libglib2.0-0 libgtk-3-0 libnspr4 libpango-1.0-0 libpangocairo-1.0-0 libstdc++6 libx11-6 libx11-xcb1 libxcb1 libxcomposite1 libxcursor1 libxdamage1 libxext6 libxfixes3 libxi6 libxrandr2 libxrender1 libxss1 libxtst6 ca-certificates fonts-liberation libappindicator1 libnss3 lsb-release xdg-utils wget libgbm-dev
```

Got instructions for more Linux distributions? [Add them to this page](https://github.com/remotion-dev/remotion/edit/main/packages/docs/docs/getting-started.md)!

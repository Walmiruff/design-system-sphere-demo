<h1 align="center">Bem vindo ao @dss/components/avatar 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.6.0-blue.svg?cacheSeconds=2592000" />
</p>

> Componente Avatar.

## Instalação

```shell
npm install @dss/components
```

## Usando

###### `module`

```ts
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { DssAvatarModule } from '@dss/components/avatar';
import { DssIconModule } from '@dss/components/icon';

import { AvatarComponent } from './avatar.component';

@NgModule({
  declarations: [AvatarComponent],
  imports: [
    CommonModule,
    DssAvatarModule,
    DssIconModule,
  ],
})
export class AvatarModule { }
```

###### `component`

```ts
import { Component } from '@angular/core';

@Component({
  selector: 'app-avatar',
  templateUrl: './avatar.component.html',
})
export class AvatarComponent { }
```

###### `template`

###### `Com Ícone`

```html
<span dssIcon name="account-user" dssAvatar></span>
```

###### `Com Iniciais`

```html
<span dssAvatar type="sky">ER</span>
```

###### `Inputs`
Name       | Type   | Default | Obs                             |
---------- | ------ | ------- | ------------------------------- |
type       | string | default | opções: default, neutral or sky |
avatarSize | string | default | opções: default or extra-large  |

## Executar testes

```shell
npm run test
```

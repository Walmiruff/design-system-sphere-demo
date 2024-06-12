<h1>Bem vindo ao Sistema de Grid do Sphere 👋</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/adicionado%20na%20versão-1.12.0-blue.svg?cacheSeconds=2592000" />
</p>

> Sistema de Grid.

&nbsp;

## Instalação

> Basta ter realizado os `imports` padrões dos [styles]

&nbsp;

## Começado

### Container

O container é um elemento de layout básico no Sphere ele é necessário, porém não obrigatório ao usar nosso sistema de grid. Os containers são usados para conter, preencher e centralizar o conteúdo dentro deles.

O Sphere vem com três containers diferentes:

* `dss-grid-container-fluid`, que é `width: 100%` para todos os breakpoints;
* `dss-grid-container-center`, que é `width: 100%` para todos os breakpoints, porém com um `max-width: 1024px` e `margin: 0 auto`;
* `dss-grid-container-left`, que é `width: 100%` para todos os breakpoints, porém com um `max-width: 1278px` e `margin-left: 0`.

&nbsp;

### Container Fluído

```html
<section class="dss-grid-container-fluid">
  <div class="dss-grid">
    <div class="dss-col-12">
      <div>12</div>
    </div>
  </div>
</section>
```

&nbsp;

### Container à Esquerda

```html
<section class="dss-grid-container-left">
  <div class="dss-grid">
    <div class="dss-col-12">
      <div>12</div>
    </div>
  </div>
</section>
```

&nbsp;

### Container no Centro

```html
<section class="dss-grid-container-center">
  <div class="dss-grid">
    <div class="dss-col-12">
      <div>12</div>
    </div>
  </div>
</section>
```

&nbsp;

## Flexbox

> O sistema de grid do Sphere é um utilitário CSS baseado no flexbox. Para obter mais informações sobre o flexbox [clique aqui](https://developer.mozilla.org/pt-BR/docs/Learn/CSS/CSS_layout/Flexbox).
> Um grid básico é definido fornecendo uma classe dss-grid e filhos com a classe dss-col. As colunas terão a mesma largura conforme a largura do grid.

&nbsp;

### Básico

```html
<section>
  <div class="dss-grid">
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>2</div>
    </div>
    <div class="dss-col">
      <div>3</div>
    </div>
    <div class="dss-col">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Com 12 Colunas

O sistema de grid é baseado em 12 colunas, onde a largura de uma coluna é definida com a classe de estilo `dss-col-{number}`.
As colunas com larguras predefinidas também podem ser usadas com colunas com largura automática `dss-col`.

No primeiro exemplo abaixo, a primeira coluna tem 6 unidades de 12 e o resto das colunas compartilham o espaço restante,
enquanto nos outros exemplos, todas as colunas têm unidades explícitas.

```html
<section>
  <div class="dss-grid">
    <div class="dss-col-6">
      <div>6</div>
    </div>
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>1</div>
    </div>
  </div>
  <div class="dss-grid">
    <div class="dss-col-3">
      <div>3</div>
    </div>
    <div class="dss-col-3">
      <div>3</div>
    </div>
    <div class="dss-col-6">
      <div>6</div>
    </div>
  </div>
  <div class="dss-grid">
    <div class="dss-col-7">
      <div>7</div>
    </div>
    <div class="dss-col-1">
      <div>1</div>
    </div>
    <div class="dss-col-4">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Com Várias linhas

Quando o número de colunas exceder 12 as colunas são quebradas em uma nova linha automaticamente.

```html
<section>
  <div class="dss-grid">
    <div class="dss-col-6">
      <div>6</div>
    </div>
    <div class="dss-col-6">
      <div>6</div>
    </div>
    <div class="dss-col-6">
      <div>6</div>
    </div>
    <div class="dss-col-6">
      <div>6</div>
    </div>
  </div>
</section>
```

&nbsp;

### Com Coluna fixa

Uma coluna pode ter uma largura fixa usando `dss-col-fixed` e `style="width: VALORpx;"`, enquanto as demais têm largura automática.

```html
<section>
  <div class="dss-grid">
    <div class="dss-col-fixed" style="width: 200px;">
      <div>200px</div>
    </div>
    <div class="dss-col">
      <div>auto</div>
    </div>
  </div>
</section>
```

&nbsp;

### Classes Responsivas

O layout responsivo é obtido aplicando classes específicas no break point correspondente, enquanto `dss-col-{number}` define o comportamento padrão.
Existem 3 tamanhos de tela que são suportados no Sphere.

| Prefixo             | Dispositivos                                 | Break point | Exemplos                   |
|---------------------|----------------------------------------------|-------------|----------------------------|
| dss-col-{number}    | -                                            | < 320px     | dss-col-5, dss-col-4       |
| dss-col-sm-{number} | Telas pequenas                               | ≥ 320px     | dss-col-sm-6, dss-col-sm-3 |
| dss-col-md-{number} | Telas médias, como tablet ou desktop normais | ≥ 768px     | dss-col-md-8, dss-col-md-2 |
| dss-col-lg-{number} | Telas maiores                                | ≥ 1920px    | dss-col-lg-1, dss-col-lg-7 |

```html
<section>
  <div class="dss-grid">
    <div class="dss-col-12 dss-col-sm-6 dss-col-md-3 dss-col-lg-6">
      <div>dss-col-12 dss-col-sm-6 dss-col-md-3 dss-col-lg-6</div>
    </div>
    <div class="dss-col-12 dss-col-sm-6 dss-col-md-3 dss-col-lg-6">
      <div>dss-col-12 dss-col-sm-6 dss-col-md-3 dss-col-lg-6</div>
    </div>
    <div class="dss-col-12 dss-col-sm-6 dss-col-md-3 dss-col-lg-6">
      <div>dss-col-12 dss-col-sm-6 dss-col-md-3 dss-col-lg-6</div>
    </div>
    <div class="dss-col-12 dss-col-sm-6 dss-col-md-3 dss-col-lg-6">
      <div>dss-col-12 dss-col-sm-6 dss-col-md-3 dss-col-lg-6</div>
    </div>
  </div>
</section>
```

&nbsp;

### Deslocamento - Offset

As classes offset permitem definir margem à esquerda em uma coluna para evitar adicionar colunas vazias para espaçamento.

| Prefixo                | Dispositivos                                 | Break point | Exemplos                         |
|------------------------|----------------------------------------------|-------------|----------------------------------|
| dss-offset-{number}    | Todas as telas                               | -           | dss-offset-5, dss-offset-4       |
| dss-sm-offset-{number} | Telas pequenas                               | ≥ 320px     | dss-sm-offset-6, dss-sm-offset-3 |
| dss-md-offset-{number} | Telas médias, como tablet ou desktop normais | ≥ 768px     | dss-md-offset-8, dss-md-offset-2 |
| dss-lg-offset-{number} | Telas maiores                                | ≥ 1920px    | dss-lg-offset-1, dss-lg-offset-7 |

```html
<section>
  <div class="dss-grid">
    <div class="dss-col-6 dss-offset-3">
      <div>6</div>
    </div>
  </div>
  <div class="dss-grid">
    <div class="dss-col-4">
      <div>4</div>
    </div>
    <div class="dss-col-4 dss-offset-4">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Layout Complexo

As colunas podem ser aninhadas para criar layouts mais complexos.

```html
<section>
  <div class="dss-grid">
    <div class="dss-col-8 dss-col-no-gutter-left dss-col-no-gutter-right">
      <div class="dss-grid dss-no-gutter">
        <div class="dss-col-6">
          <div>6</div>
        </div>
        <div class="dss-col-6">
          <div>6</div>
        </div>
        <div class="dss-col-12">
          <div>12</div>
        </div>
      </div>
    </div>
    <div class="dss-col-4">
      <div style="height: 100%;">4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Sem espaçamento

| Direção        | Tipo   | Exemplos            |
|----------------|--------|---------------------|
| Todos os lados | Grid   | dss-no-gutter       |
| Esquerda       | Grid   | dss-no-gutter-l     |
| Em cima        | Grid   | dss-no-gutter-t     |
| Direita        | Grid   | dss-no-gutter-r     |
| Em baixo       | Grid   | dss-no-gutter-b     |
| Todos os lados | Coluna | dss-col-no-gutter   |
| Esquerda       | Coluna | dss-col-no-gutter-l |
| Em cima        | Coluna | dss-col-no-gutter-t |
| Direita        | Coluna | dss-col-no-gutter-r |
| Em baixo       | Coluna | dss-col-no-gutter-b |

> Para utilizar as classes em algum dos break points padrões (320 = sm, 768 = md e 1920 = lg) basta seguir conforme os exemplos abaixo.

| Direção        | Tipo   | Exemplos               | Break point |
|----------------|--------|------------------------|-------------|
| Todos os lados | Grid   | dss-no-gutter          | -           |
| Todos os lados | Grid   | dss-no-gutter-sm       | < 768       |
| Esquerda       | Grid   | dss-no-gutter-sm-l     | < 768       |
| Em cima        | Grid   | dss-no-gutter-md-t     | < 1920      |
| Todos os lados | Coluna | dss-col-no-gutter      | -           |
| Todos os lados | Coluna | dss-col-no-gutter-sm   | < 768       |
| Esquerda       | Coluna | dss-col-no-gutter-md-l | < 1920      |
| Em baixo       | Coluna | dss-col-no-gutter-lg-b | ≥ 1920      |

```html
<section>
  <div class="dss-grid dss-no-gutter">
    <div class="dss-col-8 dss-col-no-gutter">
      <div>8</div>
    </div>
    <div class="dss-col-4 dss-col-no-gutter">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Flex Row (Padrão)

```html
<section>
  <div class="dss-grid">
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>2</div>
    </div>
    <div class="dss-col">
      <div>3</div>
    </div>
    <div class="dss-col">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Reordenar Linhas - Flex Row Reverse

```html
<section>
  <div class="dss-grid dss-flex-row-reverse">
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>2</div>
    </div>
    <div class="dss-col">
      <div>3</div>
    </div>
    <div class="dss-col">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Colunas - Flex Column

```html
<section>
  <div class="dss-grid dss-flex-column">
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>2</div>
    </div>
    <div class="dss-col">
      <div>3</div>
    </div>
    <div class="dss-col">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Reordenar Colunas - Flex Column Reverse

```html
<section>
  <div class="dss-grid dss-flex-column dss-flex-column-reverse">
    <div class="dss-col">
      <div>1</div>
    </div>
    <div class="dss-col">
      <div>2</div>
    </div>
    <div class="dss-col">
      <div>3</div>
    </div>
    <div class="dss-col">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Alinhamento horizontal no começo — Justify Content Start

```html
<section>
  <div class="dss-grid dss-justify-content-start">
    <div class="dss-col-3">
      <div>3</div>
    </div>
    <div class="dss-col-1">
      <div>1</div>
    </div>
  </div>
</section>
```

&nbsp;
### Alinhamento horizontal no final — Justify Content End

```html
<section>
  <div class="dss-grid dss-justify-content-end">
    <div class="dss-col-3">
      <div>3</div>
    </div>
    <div class="dss-col-1">
      <div>1</div>
    </div>
  </div>
</section>
```

&nbsp;
### Alinhamento horizontal no centro — Justify Content Center

```html
<section>
  <div class="dss-grid dss-justify-content-center">
    <div class="dss-col-3">
      <div>3</div>
    </div>
    <div class="dss-col-1">
      <div>1</div>
    </div>
  </div>
</section>
```

&nbsp;

### Alinhamento horizontal entre elementos — Justify Content Between

Alinhamento horizontal mantendo um espaçamento igual entre os filhos. O primeiro fica grudado no início e o último no final.

```html
<section>
  <div class="dss-grid dss-justify-content-between">
    <div class="dss-col-3">
      <div>3</div>
    </div>
    <div class="dss-col-1">
      <div>1</div>
    </div>
    <div class="dss-col-3">
      <div>3</div>
    </div>
  </div>
</section>
```

&nbsp;

### Alinhamento horizontal entre elementos — Justify Content Around

Alinhamento horizontal mantendo um espaçamento entre os filhos.

```html
<section>
  <div class="dss-grid dss-justify-content-around">
    <div class="dss-col-3">
      <div>3</div>
    </div>
    <div class="dss-col-1">
      <div>1</div>
    </div>
    <div class="dss-col-3">
      <div>3</div>
    </div>
  </div>
</section>
```
&nbsp;

### Alinhamento horizontal entre elementos — Justify Content Evenly

Alinhamento horizontal mantendo um espaçamento uniforme entre os filhos inclusive nas bordas — Justify Content Evenly

```html
<section>
  <div class="dss-grid dss-justify-content-evenly">
    <div class="dss-col-3">
      <div>3</div>
    </div>
    <div class="dss-col-1">
      <div>1</div>
    </div>
    <div class="dss-col-3">
      <div>3</div>
    </div>
  </div>
</section>
```

**Obs.: Não há suporte no IE 11**

&nbsp;

### Alinhamento vertical no começo — Align Items Start

```html
<section class="dss-mx-1.5">
  <div class="dss-grid dss-py-1.5 dss-align-items-start" style="height: 200px;">
    <div class="dss-col-4">
      <div>4</div>
    </div>
    <div class="dss-col-4">
      <div>4</div>
    </div>
    <div class="dss-col-4">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Alinhamento vertical no final — Align Items End

```html
<section class="dss-mx-1.5">
  <div class="dss-grid dss-py-1.5 dss-align-items-end" style="height: 200px;">
    <div class="dss-col-4">
      <div>4</div>
    </div>
    <div class="dss-col-4">
      <div>4</div>
    </div>
    <div class="dss-col-4">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Alinhamento vertical no centro — Align Items Center

```html
<section>
  <div class="dss-grid dss-align-items-center" style="height: 200px;">
    <div class="dss-col-4">
      <div>4</div>
    </div>
    <div class="dss-col-4">
      <div>4</div>
    </div>
    <div class="dss-col-4">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Alinhamento vertical esticado — Align Items Stretch

```html
<section class="dss-mx-1.5">
  <div class="dss-grid dss-py-1.5 dss-align-items-stretch" style="height: 200px;">
    <div class="dss-col-4">
      <div style="height: 100%;">4</div>
    </div>
    <div class="dss-col-4">
      <div style="height: 100%;">4</div>
    </div>
    <div class="dss-col-4">
      <div style="height: 100%;">4</div>
    </div>
  </div>
</section>
```

&nbsp;

### Alinhamento vertical por coluna

```html
<section class="dss-mx-1.5">
  <div class="dss-grid dss-py-1.5" style="height: 200px;">
    <div class="dss-col-4 dss-align-self-start">
      <div>4</div>
    </div>
    <div class="dss-col-4 dss-align-self-center">
      <div>4</div>
    </div>
    <div class="dss-col-4 dss-align-self-end">
      <div>4</div>
    </div>
  </div>
</section>
```

&nbsp;

### CSS Gap

```html
<section>
  <div class="dss-display-flex dss-flex-wrap dss-justify-content-center dss-gap-1.5">
    <div>1</div>
    <div>2</div>
    <div>3</div>
    <div>4</div>
    <div>5</div>
    <div>6</div>
    <div>7</div>
    <div>8</div>
    <div>9</div>
    <div>10</div>
    <div>11</div>
    <div>12</div>
  </div>
</section>
```

> O `dss-gap` tem as mesmas opções de tamanho e break point que as [classes de apoio de margin e padding](#espaçamento-margin-ou-padding).
> A classe `.dss-col` **não deve ser usada juntamente com a classe `.dss-gap`** pois a lógica de espaçamento entre elas são conflitantes. Enquanto o `gap` espaça os itens proporcionalmente em relação ao espaço disponível usando a propriedade nativa `gap`, o `.dss-col` utiliza o `padding-inline` de cada coluna pra esse fim.

&nbsp;

## Classes de Apoio

### Display

| Classe                   | Propriedade           | Break point |
|--------------------------|-----------------------|-------------|
| dss-display-none         | display: none         | -           |
| dss-display-inline       | display: inline       | -           |
| dss-display-inline-block | display: inline-block | -           |
| dss-display-block        | display: block        | -           |
| dss-display-flex         | display: flex         | -           |
| dss-display-inline-flex  | display: inline-flex  | -           |

> Para utilizar as classes em algum dos break points padrões (320 = sm, 768 = md e 1920 = lg) basta seguir conforme os exemplos abaixo.

| Classe              | Propriedade   | Break point |
|---------------------|---------------|-------------|
| dss-display-none    | display: none | -           |
| dss-display-sm-none | display: none | ≥ 320       |
| dss-display-md-none | display: none | ≥ 768       |
| dss-display-lg-none | display: none | ≥ 1920      |

### Text

| Classe              | Propriedade                                                    | Break point |
|---------------------|----------------------------------------------------------------|-------------|
| dss-text-justify    | text-align: justify                                            | -           |
| dss-text-left       | text-align: left                                               | -           |
| dss-text-right      | text-align: right                                              | -           |
| dss-text-center     | text-align: center                                             | -           |
| dss-text-nowrap     | white-space: nowrap                                            | -           |
| dss-text-truncate   | overflow: hidden; text-overflow: ellipsis; white-space: nowrap | -           |
| dss-text-lowercase  | text-transform: lowercase                                      | -           |
| dss-text-uppercase  | text-transform: uppercase                                      | -           |
| dss-text-capitalize | text-transform: capitalize                                     | -           |
| dss-text-bold       | font-weight: 700                                               | -           |
| dss-text-normal     | font-weight: 400                                               | -           |
| dss-text-light      | font-weight: 300                                               | -           |
| dss-text-italic     | font-style: italic                                             | -           |

> Para utilizar as classes dss-text-justify, dss-text-left, dss-text-right ou dss-text-center em algum dos break points
> padrões (320 = sm, 768 = md e 1920 = lg) basta seguir conforme os exemplos abaixo.

| Classe              | Propriedade         | Break point |
|---------------------|---------------------|-------------|
| dss-text-center     | text-align: center  | -           |
| dss-text-sm-justify | text-align: justify | ≥ 320       |
| dss-text-md-left    | text-align: left    | ≥ 768       |
| dss-text-lg-right   | text-align: right   | ≥ 1920      |

### Espaçamento (Margin ou Padding)

As classes utilizam o formato a seguir:

* `[prefixo]-[propriedade]-[valor]` para definição em todos os lados, por exemplo, `dss-m-0.25`, `dss-p-2`.
* `[prefixo]-[propriedade][direção]-[valor]` para definição em uma direção, por exemplo, `dss-pl-1`, `dss-mb-0.25`.
* `[prefixo]-[propriedade][direção]-[tela]-[valor]` para definição em uma direção e em um break point, por exemplo, `dss-mb-sm-2.5`, `dss-pr-md-0.25`.

As definições das classes de espaçamento são:

* `m` para classes de `margin`.
* `p` para classes de `padding`.

As definições de direção são:

* `l` para classes de `margin-left` ou `padding-left`.
* `t` para classes de `margin-top` ou `padding-top`.
* `r` para classes de `margin-right` ou `padding-right`.
* `b` para classes de `margin-bottom` ou `padding-bottom`.

Os break points são:

* `sm` para telas `≥ 320px`.
* `md` para telas `≥ 768px`.
* `lg` para telas `≥ 1920px`.

As definições de tamanho são:

* `0.25` para classes com valor de `4px`.
* `0.5` para classes com valor de `8px`.
* `1` para classes com valor de `16px`.
* `1.5` para classes com valor de `24px`.
* `2` para classes com valor de `32px`.
* `2.5` para classes com valor de `40px`.
* `3` para classes com valor de `48px`.

#### Valores negativos

As classes de margem também podem ser usadas com valores negativos, basta adicionar a letra `n` antes do valor, por exemplo, `dss-m-n0.25`, 
`dss-mx-n0.5`, `dss-my-n1`, `dss-mt-n1.5`, `dss-ml-n2`, `dss-mb-n2.5` ou `dss-mr-n3`.

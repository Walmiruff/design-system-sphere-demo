import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components.component';


export const routes: Routes = [
  {
    path: '',
    component: ComponentsComponent,
    children: [
      {
        path: 'accordion',
        loadChildren: () => import('./accordion/accordion.module').then((m) => m.AccordionModule),
        data: { label: 'Accordion' },
      },
      {
        path: 'alert-banner',
        loadChildren: () => import('./alert-banner/alert-banner.module').then((m) => m.AlertBannerModule),
        data: { label: 'Alert Banner' },
      },
      {
        path: 'alert-toast',
        loadChildren: () => import('./alert-toast/alert-toast.module').then((m) => m.AlertToastModule),
        data: { label: 'Alert Toast' },
      },
      {
        path: 'avatar',
        loadChildren: () => import('./avatar/avatar.module').then((m) => m.AvatarModule),
        data: { label: 'Avatar' },
      },
      {
        path: 'background-status',
        loadChildren: () => import('./background-status/background-status.module').then((m) => m.BackgroundStatusModule),
        data: { label: 'Background Status' },
      },
      {
        path: 'badge',
        loadChildren: () => import('./badge/badge.module').then((m) => m.BadgeModule),
        data: { label: 'Badge' },
      },
      {
        path: 'breadcrumb',
        loadChildren: () => import('./breadcrumb/breadcrumb.module').then((m) => m.BreadcrumbModule),
        data: { label: 'Breadcrumb' },
      },
      {
        path: 'buttons',
        loadChildren: () => import('./button/button.module').then((m) => m.ButtonModule),
        data: { label: 'Buttons' },
      },
      {
        path: 'calendar',
        loadChildren: () => import('./calendar/calendar.module').then((m) => m.CalendarModule),
        data: { label: 'Calendar' },
      },
      {
        path: 'cards',
        loadChildren: () => import('./card/card.module').then((m) => m.CardModule),
        data: { label: 'Cards' },
      },
      {
        path: 'card-option',
        loadChildren: () => import('./card-option/card-option.module').then((m) => m.CardOptionModule),
        data: { label: 'Card Option (Option Select)' },
      },
      {
        path: 'carousel',
        loadChildren: () => import('./carousel/carousel.module').then((m) => m.CarouselModule),
        data: { label: 'Carousel' },
      },
      {
        path: 'chat',
        loadChildren: () => import('./chat/chat.module').then((m) => m.ChatModule),
        data: { label: 'Chat' },
      },
      {
        path: 'containers',
        loadChildren: () => import('./container/container.module').then((m) => m.ContainerModule),
        data: { label: 'Containers' },
      },
      {
        path: 'countdown',
        loadChildren: () => import('./countdown/countdown.module').then((m) => m.CountdownModule),
        data: { label: 'Countdown' },
      },
      {
        path: 'data-table',
        loadChildren: () => import('./data-table/data-table.module').then((m) => m.DataTableModule),
        data: { label: 'Data Table' },
      },
      {
        path: 'dialog',
        loadChildren: () => import('./dialog/dialog.module').then((m) => m.DialogModule),
        data: { label: 'Dialog' },
      },
      {
        path: 'dividers',
        loadChildren: () => import('./divider/divider.module').then((m) => m.DividerModule),
        data: { label: 'Dividers' },
      },
      {
        path: 'download',
        loadChildren: () => import('./download/download.module').then((m) => m.DownloadModule),
        data: { label: 'Download' },
      },
      {
        path: 'drawer',
        loadChildren: () => import('./drawer/drawer.module').then((m) => m.DrawerModule),
        data: { label: 'Drawer' },
      },
      {
        path: 'cascader',
        loadChildren: () => import('./field/cascader/cascader.module').then((m) => m.CascaderModule),
        data: { label: 'Cascader' },
      },
      {
        path: 'checkboxes',
        loadChildren: () => import('./field/checkbox/checkbox.module').then((m) => m.CheckboxModule),
        data: { label: 'Checkboxes' },
      },
      {
        path: 'datepicker',
        loadChildren: () => import('./field/datepicker/datepicker.module').then((m) => m.DatepickerModule),
        data: { label: 'Datepicker' },
      },
      {
        path: 'dropdown',
        loadChildren: () => import('./field/dropdown/dropdown.module').then((m) => m.DropdownModule),
        data: { label: 'Dropdown' },
      },
      {
        path: 'inputs',
        loadChildren: () => import('./field/input/input.module').then((m) => m.InputModule),
        data: { label: 'Form Field' },
      },
      {
        path: 'input-clear',
        loadChildren: () => import('./field/input-clear/input-clear.module').then((m) => m.InputClearModule),
        data: { label: 'Form Field - Clear' },
      },
      {
        path: 'input-number',
        loadChildren: () => import('./field/input-number/input-number.module').then((m) => m.InputNumberModule),
        data: { label: 'Input Number' },
      },
      {
        path: 'mask',
        loadChildren: () => import('./field/mask/mask.module').then((m) => m.MaskModule),
        data: { label: 'Mask' },
      },
      {
        path: 'radio-group',
        loadChildren: () => import('./field/radio-group/radio-group.module').then((m) => m.RadioGroupModule),
        data: { label: 'Radio' },
      },
      {
        path: 'slider',
        loadChildren: () => import('./field/slider/slider.module').then((m) => m.SliderModule),
        data: { label: 'Slider' },
      },
      {
        path: 'textarea',
        loadChildren: () => import('./field/text-area/text-area.module').then((m) => m.TextAreaModule),
        data: { label: 'Text Area' },
      },
      {
        path: 'toggles',
        loadChildren: () => import('./field/toggle/toggle.module').then((m) => m.ToggleModule),
        data: { label: 'Toggles (Switch)' },
      },
      {
        path: 'uploads',
        loadChildren: () => import('./field/upload/upload.module').then((m) => m.UploadModule),
        data: { label: 'Uploads' },
      },
      {
        path: 'flyout-menu',
        loadChildren: () => import('./flyout-menu/flyout-menu.module').then((m) => m.FlyoutMenuModule),
        data: { label: 'Flyout Menu' },
      },
      {
        path: 'grid',
        loadChildren: () => import('./grid/grid.module').then((m) => m.GridModule),
        data: { label: 'Grid' },
      },
      {
        path: 'header',
        loadChildren: () => import('./header/header.module').then((m) => m.HeaderModule),
        data: { label: 'Header' },
      },
      {
        path: 'icons',
        loadChildren: () => import('./icon/icon.module').then((m) => m.IconModule),
        data: { label: 'Icons' },
      },
      {
        path: 'list',
        loadChildren: () => import('./list/list.module').then((m) => m.ListModule),
        data: { label: 'List' },
      },
      // {
      //   path: 'loader',
      //   loadChildren: () => import('./loader/loader.module').then((m) => m.LoaderModule),
      //   data: { label: 'Loader' },
      // },
      {
        path: 'logo',
        loadChildren: () => import('./logo/logo.module').then((m) => m.LogoModule),
        data: { label: 'Logo' },
      },
      {
        path: 'notify',
        loadChildren: () => import('./notify/notify.module').then((m) => m.NotifyModule),
        data: { label: 'Notify' },
      },
      {
        path: 'option-button',
        loadChildren: () => import('./option-button/option-button.module').then((m) => m.OptionButtonModule),
        data: { label: 'Option Button' },
      },
      {
        path: 'page-menu',
        loadChildren: () => import('./page-menu/page-menu.module').then((m) => m.PageMenuModule),
        data: { label: 'Page Menu' },
      },
      {
        path: 'pagination',
        loadChildren: () => import('./pagination/pagination.module').then((m) => m.PaginationModule),
        data: { label: 'Pagination' },
      },
      {
        path: 'position',
        loadChildren: () => import('./position/position.module').then((m) => m.PositionModule),
        data: { label: 'Position' },
      },
      {
        path: 'product-card',
        loadChildren: () => import('./product-card/product-card.module').then((m) => m.ProductCardModule),
        data: { label: 'Product Card' },
      },
      {
        path: 'progress-loader',
        loadChildren: () => import('./progress-loader/progress-loader.module').then((m) => m.ProgressLoaderModule),
        data: { label: 'Progress Loader' },
      },
      {
        path: 'progress-step',
        loadChildren: () => import('./progress-step/progress-step.module').then((m) => m.ProgressStepModule),
        data: { label: 'Progress Step' },
      },
      {
        path: 'rate',
        loadChildren: () => import('./rate/rate.module').then((m) => m.RateModule),
        data: { label: 'Rate' },
      },
      {
        path: 'result-state',
        loadChildren: () => import('./result-state/result-state.module').then((m) => m.ResultStateModule),
        data: { label: 'Result State' },
      },
      {
        path: 'search-bar',
        loadChildren: () => import('./search-bar/search-bar.module').then((m) => m.SearchBarModule),
        data: { label: 'Search Bar' },
      },
      {
        path: 'segment-control',
        loadChildren: () => import('./segment-control/segment-control.module').then((m) => m.SegmentControlModule),
        data: { label: 'Segment Control' },
      },
      {
        path: 'skeleton',
        loadChildren: () => import('./skeleton/skeleton.module').then((m) => m.SkeletonModule),
        data: { label: 'Skeleton' },
      },
      {
        path: 'statistic',
        loadChildren: () => import('./statistic/statistic.module').then((m) => m.StatisticModule),
        data: { label: 'Statistic' },
      },
      {
        path: 'status-arrow',
        loadChildren: () => import('./status-arrow/status-arrow.module').then((m) => m.StatusArrowModule),
        data: { label: 'Status Arrow' },
      },
      {
        path: 'status-bar',
        loadChildren: () => import('./status-bar/status-bar.module').then((m) => m.StatusBarModule),
        data: { label: 'Status Bar' },
      },
      {
        path: 'status-circle',
        loadChildren: () => import('./status-circle/status-circle.module').then((m) => m.StatusCircleModule),
        data: { label: 'Status Circle' },
      },
      {
        path: 'tag',
        loadChildren: () => import('./tag/tag.module').then((m) => m.TagModule),
        data: { label: 'Tag' },
      },
      {
        path: 'tooltip',
        loadChildren: () => import('./tooltip/tooltip.module').then((m) => m.TooltipModule),
        data: { label: 'Tooltip' },
      },
      {
        path: 'treeview',
        loadChildren: () => import('./treeview/treeview.module').then((m) => m.TreeviewModule),
        data: { label: 'TreeView' },
      },
      {
        path: 'typography',
        loadChildren: () => import('./typography/typography.module').then((m) => m.TypographyModule),
        data: { label: 'Typography' },
      },
      { path: '', redirectTo: 'accordion', pathMatch: 'full' }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentsRoutingModule { }

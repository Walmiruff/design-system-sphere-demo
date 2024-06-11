import { ENTER, SPACE } from '@angular/cdk/keycodes';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload',
  templateUrl: './upload.component.html',
})
export class UploadComponent implements OnInit {
  public files1: Array<File>;

  public files2: Array<File>;

  public files3: Array<File>;

  get files4(): Array<File> {
    const arrayFiles: Array<File> = [];

    if (this.filesList1) {
      for (let index = 0; index < this.filesList1.length; index += 1) {
        arrayFiles.push(this.filesList1.item(index));
      }
    }

    return arrayFiles;
  }

  public filesList1: FileList;

  get files5(): Array<File> {
    const arrayFiles: Array<File> = [];

    if (this.filesList2) {
      for (let index = 0; index < this.filesList2.length; index += 1) {
        arrayFiles.push(this.filesList2.item(index));
      }
    }

    return arrayFiles;
  }

  public filesList2: FileList;

  get files6(): Array<File> {
    const arrayFiles: Array<File> = [];

    if (this.filesList3) {
      for (let index = 0; index < this.filesList3.length; index += 1) {
        arrayFiles.push(this.filesList3.item(index));
      }
    }

    return arrayFiles;
  }

  public filesList3: FileList;

  public files7: Array<File>;

  public formGroup: FormGroup;

  constructor(private readonly _builder: FormBuilder) {}

  public ngOnInit(): void {
    this.formGroup = this._builder.group({
      upload: [
        null,
        Validators.required,
      ],
    });
  }

  public onKeyup(event: KeyboardEvent, index: number, arrayName: string): void {
    if (event.keyCode === ENTER || event.keyCode === SPACE) {
      this.removeFile(index, arrayName);
    }
  }

  public removeFile(index: number, arrayName: string): void {
    this[arrayName].splice(index, 1);

    if (this[arrayName].length === 0) {
      this[arrayName] = null;
    }
  }

  public removeFileList(index: number, fileListName: string): void {
    const dataTransfer = new DataTransfer();

    if (fileListName === 'upload') {
      for (let i = 0; i < this.formGroup.controls.upload.value.length; i += 1) {
        if (i !== index) {
          dataTransfer.items.add(this.formGroup.controls.upload.value.item(i));
        }
      }

      this.formGroup.controls.upload.setValue(dataTransfer.files);
    } else {
      for (let i = 0; i < this[fileListName].length; i += 1) {
        if (i !== index) {
          dataTransfer.items.add(this[fileListName].item(i));
        }
      }

      this[fileListName] = dataTransfer.files;
    }
  }

  public submit(): void {
    if (this.formGroup.valid) {
      alert('Dados prontos para enviar');

      this.formGroup.reset();
    }
  }
}

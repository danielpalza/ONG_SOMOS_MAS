//  ESTE ARCHIVO FUE BORRADO DE MASTER , LO AGREGO DE NUEVO PARA LA FUNCIONALIDAD DEL COMPONENTE

export default {
  toolbar: {
    items: [
      'bold',
      'imageUpload',
      'italic',
      'undo',
      'redo',
      'insertTable',
      'bulletedlist',
      'numberedList',
    ],
    shouldNotGroupWhenFull: true,
  },
  Plugin: ['Base64UploadAdapter', 'BlockToolbar'],
};

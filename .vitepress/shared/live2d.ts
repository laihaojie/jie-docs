export async function setLive2D() {
  if (!import.meta.env.SSR) {
    const { loadOml2d } = await import('oh-my-live2d')
    loadOml2d({
      models: [
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
          scale: 0.08,
          position: [-30, 0],
          mobilePosition: [-10, 0],
          mobileScale: 0.05,
          mobileStageStyle: {
            width: 150,
          },
          stageStyle: {
            width: '220px',
            height: '240.24px',
            left: 'auto',
            right: '0px',
            pointerEvents: 'none',
          },
        },
      ],
      sayHello: false,
      statusBar: {
        disable: true,
      },
      menus: {
        disable: true,
      },
    })
  }
}

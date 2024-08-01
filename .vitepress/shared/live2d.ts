export async function setLive2D() {
  if (!import.meta.env.SSR) {
    const { loadOml2d } = await import('oh-my-live2d')
    loadOml2d({
      models: [
        {
          path: 'https://cdn.jsdelivr.net/gh/Eikanya/Live2d-model/Live2D/Senko_Normals/senko.model3.json',
        },
      ],
    })
  }
}

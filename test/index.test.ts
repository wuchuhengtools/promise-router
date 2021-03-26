import router from '../src/index';

test('#main function test', async () => {
    const res = await router('/me/devices/:id/files/:fileId', '/me/devices/1/files/2') as MainFunction.RouterResType
    expect(res.routeParams.id).toBe('1')
    expect(res.routeParams.fileId).toBe('2')
    await expect(router('/me/devices/:id/files/:fileId', '/me/devices/1/files')).rejects.toBe("the route was't matched")
})
